import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOneComponent } from './pagina-one.component';

describe('PaginaOneComponent', () => {
  let component: PaginaOneComponent;
  let fixture: ComponentFixture<PaginaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
