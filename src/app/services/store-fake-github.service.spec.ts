import { TestBed } from '@angular/core/testing';

import { StoreFakeGithubService } from './store-fake-github.service';

describe('StoreFakeGithubService', () => {
  let service: StoreFakeGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreFakeGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
