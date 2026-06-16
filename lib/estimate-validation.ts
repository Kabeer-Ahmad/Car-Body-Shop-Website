export const MAX_PHOTOS = 3;
export const MAX_PHOTO_SIZE_BYTES = 10 * 1024 * 1024;

export function trimField(value: FormDataEntryValue | null | undefined): string {
    if (typeof value !== 'string') return '';
    return value.trim();
}

function countDigits(value: string): number {
    return value.replace(/\D/g, '').length;
}

export function isValidUkPhone(phone: string): boolean {
    const digits = phone.replace(/\D/g, '');
    if (countDigits(phone) < 10 || countDigits(phone) > 13) return false;

    if (digits.startsWith('44')) {
        const national = digits.slice(2);
        return national.length >= 9 && national.length <= 10;
    }

    if (digits.startsWith('0')) {
        return digits.length >= 10 && digits.length <= 11;
    }

    return digits.length >= 10;
}

export interface EstimateFields {
    name: string;
    phone: string;
    vehicle: string;
    description: string;
}

export type EstimateValidationResult =
    | { ok: true; data: EstimateFields }
    | { ok: false; error: string };

export function validateEstimateFields(raw: {
    name: string;
    phone: string;
    vehicle: string;
    description?: string;
}): EstimateValidationResult {
    const name = raw.name.trim();
    const phone = raw.phone.trim();
    const vehicle = raw.vehicle.trim();
    const description = raw.description?.trim() ?? '';

    if (!name || name.length < 2) {
        return { ok: false, error: 'Please enter your name (at least 2 characters).' };
    }
    if (name.length > 100) {
        return { ok: false, error: 'Name is too long (max 100 characters).' };
    }
    if (!phone) {
        return { ok: false, error: 'Please enter your phone number.' };
    }
    if (!isValidUkPhone(phone)) {
        return { ok: false, error: 'Please enter a valid UK phone number (e.g. 07700 900000).' };
    }
    if (!vehicle || vehicle.length < 3) {
        return { ok: false, error: 'Please enter your vehicle details (at least 3 characters).' };
    }
    if (vehicle.length > 150) {
        return { ok: false, error: 'Vehicle details are too long (max 150 characters).' };
    }
    if (description.length > 2000) {
        return { ok: false, error: 'Description is too long (max 2000 characters).' };
    }

    return { ok: true, data: { name, phone, vehicle, description } };
}

export function validatePhotos(files: File[]): string | null {
    if (files.length > MAX_PHOTOS) {
        return `You can upload a maximum of ${MAX_PHOTOS} photos.`;
    }

    for (const file of files) {
        if (!file.type.startsWith('image/')) {
            return 'Only image files are allowed.';
        }
        if (file.size > MAX_PHOTO_SIZE_BYTES) {
            return `Each photo must be under 10MB ("${file.name}" is too large).`;
        }
    }

    return null;
}

export function phoneTelHref(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    if (digits.startsWith('0')) {
        return `+44${digits.slice(1)}`;
    }
    if (digits.startsWith('44')) {
        return `+${digits}`;
    }
    return digits;
}

export function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
