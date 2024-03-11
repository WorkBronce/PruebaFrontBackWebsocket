import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Videojuego } from './videojuego.interface';
import { VideojuegosService } from './videojuegos.service';

@Controller('videojuegos')
export class VideojuegosController {
  constructor(private readonly videojuegosService: VideojuegosService) {}

  @Get()
  async findAll(): Promise<Videojuego[]> {
    console.log('Obteniendo todos los videojuegos...');
    const videojuegos = await this.videojuegosService.findAll();
    console.log('Videojuegos obtenidos:', videojuegos);
    return videojuegos;
  }
  // Get todos los creadores
  @Get('creadores')
  async findCreadores(): Promise<string[]> {
    return this.videojuegosService.findCreadores();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Videojuego> {
    try {
      const videojuego = await this.videojuegosService.findOne(id);
      if (!videojuego) {
        throw new Error(`No se encontró ningún videojuego con el ID ${id}`);
      }
      return videojuego;
    } catch (error) {
      throw new Error(`Error al buscar el videojuego: ${error.message}`);
    }
  }

  @Post()
  async create(@Body() videojuego: Videojuego): Promise<void> {
    await this.videojuegosService.create(videojuego);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatedVideojuego: Videojuego,
  ): Promise<void> {
    await this.videojuegosService.update(id, updatedVideojuego);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.videojuegosService.delete(id);
  }

  //Get('videojuegos') by creador
  @Get('creadores/:creador')
  async findByCreador(
    @Param('creador') creador: string,
  ): Promise<Videojuego[]> {
    return this.videojuegosService.findByCreador(creador);
  }
  //Get('videojuegos') by genero
  @Get('genero/:genero')
  async findByGenero(@Param('genero') genero: string): Promise<Videojuego[]> {
    return this.videojuegosService.findByGenero(genero);
  }
}
