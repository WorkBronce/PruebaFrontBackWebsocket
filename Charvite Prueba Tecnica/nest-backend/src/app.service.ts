import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(): Promise<void> {
    try {
      // Crear un transportador de correo electrónico
      const transporter = nodemailer.createTransport({
        host: 'live.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'api',
          pass: '77619ec235039800e15dc02169dbad53',
        },
      });

      // Enviar el correo electrónico
      await transporter.sendMail({
        from: 'mailtrap@demomailtrap.com>',
        to: 'workbronce@hotmail.com',
        subject: 'Real-time Event Notification',
        text: 'An event has occurred in real-time.',
      });

      console.log('Correo electrónico enviado con éxito.');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  }
}
