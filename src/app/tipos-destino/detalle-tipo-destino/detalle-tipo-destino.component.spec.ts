import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoDestinoComponent } from './detalle-tipo-destino.component';

describe('DetalleTipoDestinoComponent', () => {
  let component: DetalleTipoDestinoComponent;
  let fixture: ComponentFixture<DetalleTipoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTipoDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTipoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
