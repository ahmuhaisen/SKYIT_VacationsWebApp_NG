import { Injectable } from "@angular/core";

import { User, UserSummary } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    private loggedInUser: User = {
        id: 1,
        name: "Ahmad Muhaisen",
        profileImage: null,
        department: "Development",
        position: "Software Engineer Intern",
        reportingTo: "Wedyan Al-Switi",
        corporateLevel: 1,
        lifetimeInYears: 1,
    }

    get loggedInShortUserName(): string {
        return this.loggedInUser.name.split(' ')[0];
    }

    get loggedInUserDetails(): User {
        return this.loggedInUser;
    }

    get loggedInUserSummary(): UserSummary {
        return {
            ...this.loggedInUser,

            // TODO:
            // Get them from an API
            vacationRequestsCount: 1,
            leaveRequestsCount: 2
        }
    }

    get loggedInUserVacationDaysLeft(): number {
        return 3;
    }

    get loggedInUserSickDaysLeft(): number {
        return 2;
    }
}