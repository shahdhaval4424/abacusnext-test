/** 
 * All rights reserved to company.ltd
 * Utility file (static) to serve reusable function
 * Create By : Dhaval Shah (company name)
 * Created On : 2019-04-16
 * Updated By :
 * Updated On :
 */

import * as moment from 'moment';
import { timerDetail } from './model/model';
//shared functionality 
export class Project
{
    static timeCounter : number = 0; // used for the calculation of the timer start and pause 
    static timerDetail : timerDetail;
    // method to convert number to minutes and seconds
    static convertCounterToMMSS(counterVal : number) : string
    {
        let MM = counterVal / 60;
        let SS = counterVal % 60;
        return Math.floor(MM).toString() + ":" + Math.floor(SS).toString();
    }
    
    //retun a sample JSON.. later this can be convert to API call.
    static timerDetailJSON() : JSON
    {
        return JSON.parse('{"date":"'+moment().format('YYYY-MM-DD')+'","contact":"Dhaval Shah","note":"Abacusnext Test demo applcation"}');
    }
}

//enum for the time status for better readable code.
export class TimerStatus {
    static START: string = 'start';
    static PAUSE: string = 'pause';
}