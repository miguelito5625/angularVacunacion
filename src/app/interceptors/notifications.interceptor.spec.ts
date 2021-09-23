import { TestBed } from '@angular/core/testing';

import { CheckConnectionToBackendInterceptor } from './notifications.interceptor';

describe('CheckConnectionToBackendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CheckConnectionToBackendInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CheckConnectionToBackendInterceptor = TestBed.inject(CheckConnectionToBackendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
