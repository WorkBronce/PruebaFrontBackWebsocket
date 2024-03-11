import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Videojuego } from './videojuego.interface';

@Injectable()
export class VideojuegosService {
  private readonly filePath = 'videojuegos.json';

  private async readData(): Promise<Videojuego[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }

  private async writeData(data: Videojuego[]): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, JSON.stringify(data), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async findAll(): Promise<Videojuego[]> {
    console.log('Leyendo datos de videojuegos...');
    const videojuegos = await this.readData();
    console.log('Videojuegos encontrados:', videojuegos);
    return videojuegos;
  }

  async findOne(id: number): Promise<Videojuego> {
    try {
      console.log('Buscando videojuego con ID:', id);
      const videojuegos = await this.readData();
      const foundVideojuego = videojuegos.find((v) => v.id == id);
      console.log('Videojuego encontrado:', foundVideojuego);
      if (!foundVideojuego) {
        throw new Error(`No se encontró ningún videojuego con el ID ${id}`);
      }
      return foundVideojuego;
    } catch (error) {
      throw new Error(`Error al buscar el videojuego: ${error.message}`);
    }
  }

  async create(videojuego: Videojuego): Promise<void> {
    const videojuegos = await this.readData();
    videojuegos.push(videojuego);
    await this.writeData(videojuegos);
  }

  async update(id: number, updatedVideojuego: Videojuego): Promise<void> {
    let videojuegos = await this.readData();
    videojuegos = videojuegos.map((v) => (v.id === id ? updatedVideojuego : v));
    await this.writeData(videojuegos);
  }

  async delete(id: number): Promise<void> {
    let videojuegos = await this.readData();
    videojuegos = videojuegos.filter((v) => v.id !== id);
    await this.writeData(videojuegos);
  }

  async findCreadores(): Promise<string[]> {
    // devuelve un array con los nombres de los creadores
    const videojuegos = await this.readData();
    console.log('Buscando creadores de videojuegos...');
    const creadores = videojuegos.map((v) => v.creador);

    return [...new Set(creadores)];
  }

  async findByGenero(genero: string): Promise<Videojuego[]> {
    // devuelve un array de videojuegos con el género especificado
    const videojuegos = await this.readData();
    console.log('Buscando videojuegos del género:', genero);
    return videojuegos.filter((v) => v.genero === genero);
  }

  async findByCreador(creador: string): Promise<Videojuego[]> {
    // devuelve un array de videojuegos con el creador especificado
    const videojuegos = await this.readData();
    console.log('Buscando videojuegos del creador:', creador);
    return videojuegos.filter((v) => v.creador === creador);
  }
}
