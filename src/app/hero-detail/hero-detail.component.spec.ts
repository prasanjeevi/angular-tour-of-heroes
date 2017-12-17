import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Input } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from '../message.service';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        HeroDetailComponent
      ],
      providers: [
        HttpHandler,
        HttpClient,
        MessageService,
        HeroService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
