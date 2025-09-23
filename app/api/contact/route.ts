import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Validamos que las variables de entorno estén configuradas
  if (
    !process.env.EMAIL_SERVER_USER ||
    !process.env.EMAIL_SERVER_PASSWORD ||
    !process.env.EMAIL_TO
  ) {
    return NextResponse.json(
      { error: "El servidor de correo no está configurado." },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    // Validación básica de los campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true, // true para puerto 465, false para otros
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de: ${name}`,
      html: `<h1>Nuevo Mensaje de Contacto</h1><p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar el mensaje: " + error },
      { status: 500 }
    );
  }
}
