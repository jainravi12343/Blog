import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuthorBlogsComponent } from './list-author-blogs.component';

describe('ListAuthorBlogsComponent', () => {
  let component: ListAuthorBlogsComponent;
  let fixture: ComponentFixture<ListAuthorBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAuthorBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAuthorBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
