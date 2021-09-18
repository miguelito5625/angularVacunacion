import { TestBed } from '@angular/core/testing';

import { CheckConnectionToBackendInterceptor } from './check-connection-to-backend.interceptor';

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
