import { TestBed, inject } from '@angular/core/testing';

import { TeamSelectionService } from './team-selection.service';

describe('TeamSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamSelectionService]
    });
  });

  it('should be created', inject([TeamSelectionService], (service: TeamSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
