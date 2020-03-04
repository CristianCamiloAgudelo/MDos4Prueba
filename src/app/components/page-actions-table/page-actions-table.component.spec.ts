import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionsTableComponent } from './page-actions-table.component';

describe('PageActionsTableComponent', () => {
  let component: PageActionsTableComponent;
  let fixture: ComponentFixture<PageActionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
