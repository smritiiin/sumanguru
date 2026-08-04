import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Resend API key is missing." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Send notification email
    const { data, error } = await resend.emails.send({
      from: "Consultation Inquiry <onboarding@resend.dev>",
      to: ["smritynpl@gmail.com"],
      subject: `New Inquiry: ${service || "General"} from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #b45309; margin-top: 0;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</p>
          <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Context / Birth Parameters:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API internal error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Server Route Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email notification." },
      { status: 500 }
    );
  }
}









// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, service, message } = await request.json();

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     const data = await resend.emails.send({
//       from: "Consultation Inquiry <onboarding@resend.dev>",
//       to: ["smritynpl@gmail.com"], // Your notification inbox
//       subject: `New Inquiry: ${service} from ${name}`,
//       replyTo: email,
//       html: `
//         <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
//           <h2 style="color: #b45309; margin-top: 0;">New Consultation Request</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
//           <p><strong>Service Focus:</strong> ${service}</p>
//           <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
//           <p><strong>Context / Birth Parameters:</strong></p>
//           <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 8px;">${message}</p>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to send email notification" }, { status: 500 });
//   }
// }