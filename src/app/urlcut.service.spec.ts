import { TestBed } from '@angular/core/testing';

import { UrlcutService } from './urlcut.service';

describe('UrlcutService', () => {
  let service: UrlcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlcutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
