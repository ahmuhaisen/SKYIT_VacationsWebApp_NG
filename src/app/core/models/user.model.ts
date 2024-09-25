export interface User {
    name: string;
    profileImage: string | null;
    department: string;
    position: string;
    reportingTo: string;
    corporateLevel: number;
    lifetimeInYears: number;
}

export interface UserSummary extends User {
    vacationRequestsCount: number;
    leaveRequestsCount: number;
}