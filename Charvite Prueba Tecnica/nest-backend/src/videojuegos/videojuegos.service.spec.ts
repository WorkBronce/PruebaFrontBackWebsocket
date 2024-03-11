import { Test, TestingModule } from '@nestjs/testing';
import { VideojuegosService } from './videojuegos.service';

describe('VideojuegosService', () => {
  let service: VideojuegosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideojuegosService],
    }).compile();

    service = module.get<VideojuegosService>(VideojuegosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
