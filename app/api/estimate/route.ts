import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const vehicle = formData.get('vehicle') as string;
        const description = formData.get('description') as string;
        const photos = formData.getAll('photos') as File[];

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
                .filter(photo => photo instanceof File && photo.size > 0)
                .map(async (photo) => {
                    const buffer = Buffer.from(await photo.arrayBuffer());
                    return {
                        filename: photo.name,
                        content: buffer,
                    };
                })
        );

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'carbodyshopltd@gmail.com', // Target email
            subject: `New Estimate Request from ${name} - ${vehicle}`,
            html: `
                <h2>New Estimate Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Vehicle:</strong> ${vehicle}</p>
                <p><strong>Description:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
                    ${description || 'No description provided.'}
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
