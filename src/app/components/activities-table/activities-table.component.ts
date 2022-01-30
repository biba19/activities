import { Component, Input, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activities-table',
  templateUrl: './activities-table.component.html',
  styleUrls: ['./activities-table.component.scss']
})
export class ActivitiesTableComponent implements OnInit {
  @Input() activities: Activities = [];

  filtredActivities: Activities = [];

  ngOnInit(): void {
    this.filtredActivities = this.activities;
  }

  filter(activity: string) {
    this.filtredActivities = this.activities?.filter(item => item.activity === activity);
  }

  resetFilter() {
    this.filtredActivities = this.activities;
  }
}
