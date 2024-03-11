import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideojuegosController } from './videojuegos/videojuegos.controller';
import { VideojuegosService } from './videojuegos/videojuegos.service';
import * as cors from 'cors'; // Importa el middleware cors
import { SocketModule } from '../socket/socket.module'; // Importa el módulo de WebSocket

@Module({
  imports: [SocketModule],
  controllers: [AppController, VideojuegosController],
  providers: [AppService, VideojuegosService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Habilita CORS para todas las rutas de la aplicación, incluidas las solicitudes WebSocket
    consumer.apply(cors({ origin: '*' })).forRoutes('*');
    consumer
      .apply(cors({ origin: '*' }))
      .forRoutes({ path: '/socket.io*', method: RequestMethod.ALL }); // Configura CORS para WebSockets
  }
}
