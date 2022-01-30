export interface Activity {
    vehicleVIN?: string;
    startDate: string;
    endDate: string;
    drivingSeat: string;
    activity: string;
    source: string;
    label?: string;
    startKm?: number;
    endKm?: number;
    tag: string;
}

export type Activities = Activity[];
