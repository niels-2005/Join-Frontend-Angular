import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitebarPlusHeaderComponent } from './sitebar-plus-header.component';

describe('SitebarPlusHeaderComponent', () => {
  let component: SitebarPlusHeaderComponent;
  let fixture: ComponentFixture<SitebarPlusHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitebarPlusHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitebarPlusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
