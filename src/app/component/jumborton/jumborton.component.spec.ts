import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbortonComponent } from './jumborton.component';

describe('JumbortonComponent', () => {
  let component: JumbortonComponent;
  let fixture: ComponentFixture<JumbortonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbortonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbortonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
