import transporter from './emailConfig';

const handleDisconnectAlarm = async () => {
  try {
    // Envía un correo electrónico al usuario
    await transporter.sendMail({
      from: 'ailtrap@demomailtrap.com ',
      to: 'workbronce@hotmail.com',
      subject: '¡Alarma de desconexión!',
      text: 'Se ha detectado una alarma de desconexión en tu cuenta. Por favor, revisa tu conexión.',
    });
    console.log(
      'Correo electrónico de alarma de desconexión enviado con éxito',
    );
  } catch (error) {
    console.error(
      'Error al enviar el correo electrónico de alarma de desconexión:',
      error,
    );
  }
};

export { handleDisconnectAlarm };
