import { TestBed } from '@angular/core/testing';

import { PageActionsService } from './page-actions.service';

describe('PageActionsService', () => {
  let service: PageActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
