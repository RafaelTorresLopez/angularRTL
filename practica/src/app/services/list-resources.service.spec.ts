import { TestBed } from '@angular/core/testing';

import { ListResourcesService } from './list-resources.service';

describe('ListResourcesService', () => {
  let service: ListResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
