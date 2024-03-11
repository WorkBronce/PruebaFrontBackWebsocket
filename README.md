Proyecto de Aplicación Web

Este es un proyecto de aplicación web que consta de un frontend y un backend desarrollados con Vue.js y Nest.js respectivamente.
Vue Frontend (vue-frontend)

La parte del frontend de la aplicación está desarrollada con Vue.js y se encarga de mostrar la interfaz de usuario al usuario final.
Funcionalidades

    Muestra una lista de juegos obtenidos del backend.
    Permite al usuario ver los detalles de cada juego haciendo clic en su nombre.
    Envía un correo electrónico al usuario cuando se accede a la ruta /send-email.

Instalación y Uso

    Navega hasta el directorio vue-frontend.
    Instala las dependencias del proyecto ejecutando npm install.
    Inicia el servidor de desarrollo ejecutando npm run dev.
    Accede a la aplicación en tu navegador web en http://localhost:5173.

Endpoint para enviar correo electrónico

Puedes enviar un correo electrónico haciendo una petición GET a http://localhost:3000/send-email.
Nest Backend (nest-backend)

El backend de la aplicación está desarrollado con Nest.js y se encarga de proporcionar los datos necesarios para el frontend y realizar otras tareas de lógica de negocio.
Funcionalidades

    Provee una API RESTful para interactuar con la lista de juegos.
    Envía correos electrónicos utilizando Nodemailer cuando se accede a la ruta /send-email.

Instalación y Uso

    Navega hasta el directorio nest-backend.
    Instala las dependencias del proyecto ejecutando npm install.
    Inicia el servidor de desarrollo ejecutando npm start.
    El servidor estará disponible en http://localhost:3000.

Configuración del correo electrónico

En el archivo app.service.ts del backend, modifica el método sendEmail() con las credenciales de tu cuenta de Mailtrap:


    async sendEmail(): Promise<void> {
      try {
        // Crear un transportador de correo electrónico para Mailtrap
        const transporter = nodemailer.createTransport({
          host: 'smtp.mailtrap.io',
          port: 2525,
          auth: {
            user: 'your-mailtrap-username',
            pass: 'your-mailtrap-password',
          },
        });
        await transporter.sendMail({
          from: 'your-email@example.com',
          to: 'recipient@example.com',
          subject: 'Notificación de evento en tiempo real',
          text: 'Se ha producido un evento en tiempo real.',
        });
        console.log('Correo electrónico enviado con éxito.');
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
      }
    }

