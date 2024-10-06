import { inject, Injectable } from "@angular/core";

import { Vacation } from "../models/vacation.model";
import { VacationType } from "../enums/vacation-type.enum";
import { duration } from "../models/vacation-request.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class VacationsHistoryService {
    private allVacations: Vacation[] = [
        {
            id: 1,
            employeeId: 1,
            approverBy: 'Hossam Ahmed',
            duration: new duration(new Date('5/5/2024'), new Date('5/15/2024')),
            vacationType: VacationType.NonPaid
        },
        {
            id: 2,
            employeeId: 2,
            approverBy: 'Khaleel Sami',
            duration: new duration(new Date('5/7/2024'), new Date('5/8/2024')),
            vacationType: VacationType.NonPaid
        },
        {
            id: 3,
            employeeId: 1,
            approverBy: 'Khaleel Sami',
            duration: new duration(new Date('5/10/2019'), new Date('7/10/2019')),
            vacationType: VacationType.Holiday
        },
        {
            id: 4,
            employeeId: 1,
            approverBy: 'Ayah Alhaj Ali',
            duration: new duration(new Date('5/5/2022'), new Date('5/15/2022')),
            vacationType: VacationType.Annual
        },
        {
            id: 5,
            employeeId: 2,
            approverBy: 'Ayah Alhaj Ali',
            duration: new duration(new Date('12/1/2024'), new Date('15/1/2024')),
            vacationType: VacationType.Sick
        },
        {
            id: 6,
            employeeId: 1,
            approverBy: 'Hadeel Daghlass',
            duration: new duration(new Date('6/13/2024'), new Date('6/16/2024')),
            vacationType: VacationType.NonPaid
        },
        {
            id: 7,
            employeeId: 1,
            approverBy: 'Hadeel Daghlass',
            duration: new duration(new Date('5/5/2024'), new Date('5/6/2024')),
            vacationType: VacationType.NonPaid
        },
    ];

    userService = inject(UserService);

    getEmployeeVacationHistoryById(): Vacation[] {
        return this.allVacations
            .filter(vacation => vacation.employeeId === this.userService.loggedInUserDetails.id)
            .sort((a, b) => b.duration.startDate.getTime() - a.duration.startDate.getTime());
    }
}