import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from 'resend';
import { addUser } from '@/app/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request, response:Response) {
  const {name,email, message} = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['utzsv1989@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    addUser({name: name, email: email, message: message})
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}