import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  describe('#constructor', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

  describe('#startLoading', () => {
  it('should start loading', () => {
    service.startLoading();
    expect(service.isLoading).toBe(true);
  });
});

xdescribe('#stopLoading', () => {
  it('should stop loading', () => {
    service.stopLoading();
    expect(service.isLoading).toBe(false);
  });
});
});
