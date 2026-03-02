import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Force Node.js runtime — required for 'fs' and 'path' to work
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CSV_PATH = path.join(process.cwd(), 'data', 'contact_submissions.csv');
const CSV_PASSWORD = 'Password456';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const password = searchParams.get('password') || req.headers.get('x-csv-password');

    if (password !== CSV_PASSWORD) {
        return NextResponse.json({ error: 'Unauthorized. Correct password required.' }, { status: 401 });
    }

    if (!fs.existsSync(CSV_PATH)) {
        // Return empty CSV with headers if no submissions yet
        const emptyCSV = 'Name,Mobile,Email,Service,Message,Submitted At\n';
        return new Response(emptyCSV, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename="contact_submissions.csv"'
            }
        });
    }

    const fileBuffer = fs.readFileSync(CSV_PATH);

    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': 'attachment; filename="contact_submissions.csv"'
        }
    });
}

export async function POST(req) {
    try {
        const { name, mobile, email, service, message } = await req.json();
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        // Sanitize values to avoid breaking CSV format
        const clean = (val) => `"${(val || '').toString().replace(/"/g, '""')}"`;

        const row = `\n${clean(name)},${clean(mobile)},${clean(email)},${clean(service)},${clean(message)},${clean(timestamp)}`;

        const dataDir = path.dirname(CSV_PATH);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        if (!fs.existsSync(CSV_PATH)) {
            const header = 'Name,Mobile,Email,Service,Message,Submitted At';
            fs.writeFileSync(CSV_PATH, header + row);
        } else {
            fs.appendFileSync(CSV_PATH, row);
        }

        return NextResponse.json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ success: false, message: 'Error submitting form' }, { status: 500 });
    }
}
