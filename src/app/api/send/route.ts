import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from 'resend';
import { addUser } from '@/app/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    await addUser({ name, email, message });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: unknown) {
    // Check if the error is an instance of Error and handle it safely
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    } else {
      // Handle cases where the error is not an instance of Error
      return new Response(JSON.stringify({ error: "Unknown error" }), { status: 500 });
    }
  }
}