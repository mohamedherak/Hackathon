/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListeIncédentsService } from './liste-incédents.service';

describe('ListeIncédentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeIncédentsService]
    });
  });

  it('should ...', inject([ListeIncédentsService], (service: ListeIncédentsService) => {
    expect(service).toBeTruthy();
  }));
});
