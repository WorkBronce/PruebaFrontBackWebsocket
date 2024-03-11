// Importar nodemailer
import nodemailer from 'nodemailer';

// Configurar el transportador de correo electrónico
const transporter = nodemailer.createTransport({
  host: 'live.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'api',
    pass: '77619ec235039800e15dc02169dbad53',
  },
});

export default transporter;
