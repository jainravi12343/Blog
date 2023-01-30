import { TestBed } from '@angular/core/testing';

import { ShowBlogHomeService } from './show-blog-home.service';

describe('ShowBlogHomeService', () => {
  let service: ShowBlogHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowBlogHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
