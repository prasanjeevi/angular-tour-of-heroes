import { TestBed, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from './message.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpHandler,
        HttpClient,
        HeroService,
        MessageService
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
