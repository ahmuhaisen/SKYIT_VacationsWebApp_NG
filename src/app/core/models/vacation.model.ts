import { VacationType } from "../enums/vacation-type.enum";
import { duration } from "./vacation-request.model";

export interface Vacation {
    id: number,
    employeeId: number,
    approverBy: string,
    duration: duration,
    vacationType: VacationType,
}