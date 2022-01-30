import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activities } from '../models/activity.model';
import { HttpClient } from '@angular/common/http';
import { expectedActivities } from './activities.mock';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  getActivities(): Observable<Activities> {
    const url = "http://ec2-34-252-249-185.eu-west-1.compute.amazonaws.com/apis/interview/1/activities";

    // The link didn't work so I'll return a mocked data
    // return this.httpClient.get<Activities>(url);

    return of(expectedActivities);
  }
} 
