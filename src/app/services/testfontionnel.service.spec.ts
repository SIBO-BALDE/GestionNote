import { TestBed } from '@angular/core/testing';

import { TestfontionnelService } from './testfontionnel.service';

describe('TestfontionnelService', () => {
  let service: TestfontionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestfontionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
