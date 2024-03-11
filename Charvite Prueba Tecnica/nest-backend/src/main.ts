import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer } from 'http'; // Use createServer from http module
import { Server } from 'socket.io'; // Import Server type from socket.io

async function bootstrap() {
  // Create the HTTP server
  const httpServer = createServer();

  // Create the instance of socket.io and pass the HTTP server
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  // Create the NestJS application and pass the HTTP server
  const app = await NestFactory.create(AppModule, { cors: false });

  // Listen to the port and get the server instance
  const server = await app.listen(3000);

  // Attach socket.io to the existing HTTP server
  io.attach(server);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
