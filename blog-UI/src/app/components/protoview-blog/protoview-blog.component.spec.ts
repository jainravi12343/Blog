import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoviewBlogComponent } from './protoview-blog.component';

describe('ProtoviewBlogComponent', () => {
  let component: ProtoviewBlogComponent;
  let fixture: ComponentFixture<ProtoviewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtoviewBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtoviewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
