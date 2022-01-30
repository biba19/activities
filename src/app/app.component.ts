import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activities } from './models/activity.model';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  activities$: Observable<Activities>;

  constructor(
    private readonly activitiesService: ActivitiesService
  ) {  }

  ngOnInit(): void {
    this.activities$ = this.activitiesService.getActivities();
  }

}
