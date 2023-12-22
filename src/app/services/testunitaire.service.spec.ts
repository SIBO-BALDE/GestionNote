import { TestBed } from '@angular/core/testing';

import { TestunitaireService } from './testunitaire.service';

describe('TestunitaireService', () => {
  let service: TestunitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestunitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
