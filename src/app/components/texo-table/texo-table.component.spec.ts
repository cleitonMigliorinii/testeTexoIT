import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexoTableComponent } from './texo-table.component';

describe('TexoTableComponent', () => {
  let component: TexoTableComponent;
  let fixture: ComponentFixture<TexoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
