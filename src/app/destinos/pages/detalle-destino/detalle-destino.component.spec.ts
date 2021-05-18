import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDestinoComponent } from './detalle-destino.component';

describe('DetalleDestinoComponent', () => {
  let component: DetalleDestinoComponent;
  let fixture: ComponentFixture<DetalleDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
