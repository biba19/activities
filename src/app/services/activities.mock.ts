import { Activities } from "../models/activity.model";

export const expectedActivities: Activities = [
    {
      startDate: "2020-10-09T01:48:00.000+0000",
      endDate: "2020-10-09T01:49:00.000+0000",
      drivingSeat: "DRIVER1",
      activity: "REST",
      source: "DRIVERCARD",
      tag: "TRUNK"
    },
    {
      vehicleVIN: "ZCFA71JF002661744",
      startDate: "2020-10-09T01:49:00.000+0000",
      endDate: "2020-10-09T01:49:00.000+0000",
      drivingSeat: "DRIVER1",
      activity: "MARKER",
      source: "SYSTEM",
      label: "activity marker",
      startKm: 0,
      endKm: 0,
      tag: "TRUNK"
    },
    {
      vehicleVIN: "ZCFA71JF002661744",
      startDate: "2020-10-09T01:49:00.000+0000",
      endDate: "2020-10-09T01:51:00.000+0000",
      drivingSeat: "DRIVER1",
      activity: "WORK",
      source: "TRUCKBOX",
      startKm: 33554,
      endKm: 33554,
      tag: "TRUNK"
    },
  ];
  