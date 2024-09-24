import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from 'resend';
import { addUser } from '@/app/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to set CORS headers
function setCorsHeaders(response: Response) {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Or specify your domain instead of '*'
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['utzsv1989@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      const response = new Response(JSON.stringify({ error }), { status: 500 });
      return setCorsHeaders(response);  // Set CORS headers
    }

    await addUser({ name, email, message });

    const response = new Response(JSON.stringify(data), { status: 200 });
    return setCorsHeaders(response);  // Set CORS headers
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const response = new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
    return setCorsHeaders(response);  // Set CORS headers
  }
}

export async function OPTIONS() {
  const response = new Response(null, { status: 204 });
  return setCorsHeaders(response); // Handle preflight CORS requests
}