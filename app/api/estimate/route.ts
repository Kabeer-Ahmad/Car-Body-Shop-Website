import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
    escapeHtml,
    phoneTelHref,
    trimField,
    validateEstimateFields,
    validatePhotos,
} from '@/lib/estimate-validation';

export async function POST(request: Request) {
    try {
        // Validation: Check for environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
            return NextResponse.json(
                { error: 'Server configuration error. Please contact the administrator.' },
                { status: 500 }
            );
        }

        const formData = await request.formData();
        const validation = validateEstimateFields({
            name: trimField(formData.get('name')),
            phone: trimField(formData.get('phone')),
            vehicle: trimField(formData.get('vehicle')),
            description: trimField(formData.get('description')),
        });

        if (!validation.ok) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        const { name, phone, vehicle, description } = validation.data;
        const photos = formData.getAll('photos').filter((entry): entry is File => entry instanceof File);

        const photoError = validatePhotos(photos);
        if (photoError) {
            return NextResponse.json({ error: photoError }, { status: 400 });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Prepare attachments only if they are actual files (not empty strings/objects)
        const attachments = await Promise.all(
            photos
                .filter(photo => photo.size > 0)
                .map(async (photo) => {
                    const buffer = Buffer.from(await photo.arrayBuffer());
                    return {
                        filename: photo.name,
                        content: buffer,
                    };
                })
        );

        const telHref = phoneTelHref(phone);

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'carbodyshopltd@gmail.com', // Target email
            subject: `New Estimate Request from ${name} - ${vehicle}`,
            html: `
                <h2>New Estimate Request</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Phone:</strong> <a href="tel:${telHref}">${escapeHtml(phone)}</a></p>
                <p><strong>Vehicle:</strong> ${escapeHtml(vehicle)}</p>
                <p><strong>Description:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
                    ${escapeHtml(description || 'No description provided.')}
                </blockquote>
                <p><strong>Photos attached:</strong> ${attachments.length}</p>
            `,
            attachments: attachments,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }
}
