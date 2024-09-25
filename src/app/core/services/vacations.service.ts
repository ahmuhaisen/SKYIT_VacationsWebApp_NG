import { inject, Injectable } from "@angular/core";

import { UserService } from "./user.service";
import { duration, VacationRequest } from "../models/vacation-request.model";

@Injectable({
    providedIn: "root"
})
export class VacationsService {
    
    private vacationRequest: VacationRequest[] = [
        {
            id: 1,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date('2/5/2024'),
            duration: new duration(new Date('5/5/2024'), new Date('5/15/2024')),
            salary: 4000
        },
        {
            id: 2,
            employeeId: 2,
            employeeName: "Sameer Salem",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('9/10/2024'), new Date('9/11/2024')),
            salary: 2500
        },
        {
            id: 3,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('9/10/2024'), new Date('9/11/2024')),
            salary: 4000
        },
        {
            id: 4,
            employeeId: 2,
            employeeName: "Sameer Salem",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('5/5/2024'), new Date('9/5/2024')),
            salary: 2500
        },
        {
            id: 5,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('9/25/2024'), new Date('10/11/2024')),
            salary: 4000
        },
        {
            id: 6,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date('9/20/2024'),
            duration: new duration(new Date('9/25/2024'), new Date('9/29/2024')),
            salary: 4000
        },
        {
            id: 7,
            employeeId: 2,
            employeeName: "Sameer Salem",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('5/10/2024'), new Date('9/11/2024')),
            salary: 2500
        },
    ];

    userService = inject(UserService);

    getLoggedInUserVacationRequests(pageSize: number) {
        return this.vacationRequest
                   .filter(request => request.employeeId === this.userService.loggedInUserDetails.id)
                   .sort((a, b) => b.submittedOn.getTime() - a.submittedOn.getTime())
                   .slice(0, pageSize);
    }
}