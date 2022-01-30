import { TestBed } from '@angular/core/testing';
import { Activities } from '../models/activity.model';

import { ActivitiesService } from './activities.service';


describe('ActivitiesService', () => {
  let service: ActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
