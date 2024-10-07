import { duration } from "../helpers/duration.type";
import { RequestStatus } from "../enums/request-status.enum";

export interface VacationRequest {
    id: number;
    employeeId: number;
    employeeName: string;
    employeeImage: string | null;
    submittedOn: Date;
    duration: duration;
    salary: number;
    status: RequestStatus;
}