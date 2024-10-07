import { inject, Injectable } from "@angular/core";

import { UserService } from "./user.service";
import { RequestStatus } from "../enums/request-status.enum";
import { VacationRequest } from "../models/vacation-request.model";
import { duration } from "../helpers/duration.type";

@Injectable({
    providedIn: "root"
})
export class VacationRequestsService {
    
    private vacationRequest: VacationRequest[] = [
        {
            id: 1,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date('2/5/2024'),
            duration: new duration(new Date('5/5/2024'), new Date('5/15/2024')),
            salary: 4000,
            status: RequestStatus.Declined
        },
        {
            id: 2,
            employeeId: 2,
            employeeName: "Sameer Salem",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('9/10/2024'), new Date('9/11/2024')),
            salary: 2500,
            status: RequestStatus.Declined
        },
        {
            id: 3,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('9/10/2024'), new Date('9/11/2024')),
            salary: 4000,
            status: RequestStatus.Pending
        },
        {
            id: 4,
            employeeId: 2,
            employeeName: "Sameer Salem",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('5/5/2024'), new Date('9/5/2024')),
            salary: 2500,
            status: RequestStatus.Pending
        },
        {
            id: 5,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('9/25/2024'), new Date('10/11/2024')),
            salary: 4000,
            status: RequestStatus.Approved
        },
        {
            id: 6,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date('9/20/2024'),
            duration: new duration(new Date('9/25/2024'), new Date('9/29/2024')),
            salary: 4000,
            status: RequestStatus.Pending
        },
        {
            id: 7,
            employeeId: 2,
            employeeName: "Sameer Salem",
            employeeImage: null,
            submittedOn: new Date(),
            duration: new duration(new Date('5/10/2024'), new Date('9/11/2024')),
            salary: 2500,
            status: RequestStatus.Declined
        },
        {
            id: 8,
            employeeId: 1,
            employeeName: "Ahmad Muhaisen",
            employeeImage: null,
            submittedOn: new Date('9/20/2024'),
            duration: new duration(new Date('9/26/2024'), new Date('9/29/2024')),
            salary: 4000,
            status: RequestStatus.Pending
        },
    ];

    userService = inject(UserService);

    getLoggedInUserVacationRequests(pageSize: number | null  = null, status: RequestStatus | null = null): VacationRequest[] {
        let isQueried = (request: VacationRequest) => {
            if(status) {
                return request.status === status
                && request.employeeId === this.userService.loggedInUserDetails.id;
            }

            return request.employeeId === this.userService.loggedInUserDetails.id;
        };

        return this.vacationRequest
                   .filter(isQueried)
                   .sort((a, b) => b.submittedOn.getTime() - a.submittedOn.getTime())
                   .slice(0, pageSize ?? this.vacationRequest.length);
    }

    getAllVacationRequests(pageSize: number, pageNumber: number): VacationRequest[] {
        return this.vacationRequest
            //.sort((a, b) => b.submittedOn.getTime() - a.submittedOn.getTime())
            .sort((a, b) => a.id - b.id)
            .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

    getVacationRequestsTotalPages(pageSize: number): number {
        return Math.ceil(this.vacationRequest.length / pageSize);
    }
}