export class duration {
    constructor(
        public startDate: Date,
        public endDate: Date,
    ) { }

    get durationString(): string {
        if (!this.startDate || !this.endDate) {
            return "";
        }

        const durationInDays = (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
        const durationText =
            durationInDays > 7
                ? `${Math.ceil(durationInDays / 7)} Weeks`
                : `${durationInDays} Days`;
        return durationText;
    }
}