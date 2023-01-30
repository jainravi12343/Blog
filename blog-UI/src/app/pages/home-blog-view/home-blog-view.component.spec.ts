import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogViewComponent } from './home-blog-view.component';

describe('HomeBlogViewComponent', () => {
  let component: HomeBlogViewComponent;
  let fixture: ComponentFixture<HomeBlogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBlogViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
