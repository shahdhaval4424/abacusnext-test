/** 
 * All rights reserved to company.ltd
 * Model class to hold timerDetails
 * Create By : Dhaval Shah (company name)
 * Created On : 2019-04-16
 * Updated By :
 * Updated On :
 */
export class timerDetail{
    date: string;
    contact : string;
    duration : string;
    note : string;
    constructor(data : any)
    {
        if(data)
        {
            this.date = data.date;
            this.contact = data.contact;
            this.duration = data.duration;
            this.note = data.note;
        }
    }
}