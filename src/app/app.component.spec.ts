import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalcularService } from './services/calcular.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
      //  CalcularService
      ],
     // providers: [
     //   CalcularService
     // ]
    }).compileComponents();
  });

});
