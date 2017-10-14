/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AmedService } from './amed.service';

describe('AmedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmedService]
    });
  });

  it('should ...', inject([AmedService], (service: AmedService) => {
    expect(service).toBeTruthy();
  }));
});
