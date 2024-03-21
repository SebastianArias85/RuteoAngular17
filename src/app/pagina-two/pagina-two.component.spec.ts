import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTwoComponent } from './pagina-two.component';

describe('PaginaTwoComponent', () => {
  let component: PaginaTwoComponent;
  let fixture: ComponentFixture<PaginaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
