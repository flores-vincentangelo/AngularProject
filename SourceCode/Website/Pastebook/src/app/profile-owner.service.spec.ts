import { TestBed } from '@angular/core/testing';

import { ProfileOwnerService } from './profile-owner.service';

describe('ProfileOwnerService', () => {
  let service: ProfileOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
