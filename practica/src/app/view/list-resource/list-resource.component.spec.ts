import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceComponent } from './list-resource.component';

describe('ListResourceComponent', () => {
  let component: ListResourceComponent;
  let fixture: ComponentFixture<ListResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
