/** 
 * All rights reserved to company.ltd
 * Timer Detail Component
 * Create By : Dhaval Shah (company name)
 * Created On : 2019-04-16
 * Updated By :
 * Updated On :
 */
import { Component, OnInit } from '@angular/core';
import {TabsPage} from '../tabs/tabs.page'
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Project, TimerStatus } from '../../project'
import { timer, Subscription } from 'rxjs';
import { timerDetail } from 'src/model/model';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.page.html',
  styleUrls: ['./timer-page.page.scss'],
})
export class TimerPage implements OnInit {
  //Variable declaration
  public counter : string = Project.convertCounterToMMSS(Project.timeCounter); 
  public currentDate:string;
  public currentTime : string;
  public timerStatus : TimerStatus = TimerStatus.PAUSE;
  public calculationtimer = timer(0,1000);
  public calculationtimersubscribe : Subscription;
  public timerdetail : timerDetail; 
  //Variable declaration

  constructor(public nav: NavController) {
    this.currentDate = moment().format('ddd MMM D'); //show current date
    timer(0,1000).subscribe(val => this.currentTime = moment().format('h:mm')); //show time in timer
    this.timerdetail = new timerDetail(Project.timerDetailJSON()); 
    console.log(this.timerdetail);
  }

  //method to handle the initialization
  ngOnInit() {
  }

  //method to handle the click event on the card and navgate to detail page.
  showdetail()
  {
      this.timerdetail.duration = Project.convertCounterToMMSS(Project.timeCounter);
      Project.timerDetail = this.timerdetail;
      this.nav.navigateRoot("/detail-page");
  }

  //method to handle the start event
  starttimer()
  { 
    //subscribe the timer and initiate the calculation
    this.calculationtimersubscribe = this.calculationtimer.subscribe(val => {
      this.timerStatus = TimerStatus.START; 
      this.counter = Project.convertCounterToMMSS(Project.timeCounter); // show the lable in the MM:SS formate
      Project.timeCounter += 1; // Increment the event by 1 sec and store it to static variable.. (Static) need to use it further
    });
  }

  //method to handle the pause event.
  pausetimer()
  {
    this.timerStatus = TimerStatus.PAUSE;
    this.calculationtimersubscribe.unsubscribe();
  }

  //page leave event
  ionViewDidLeave()
  {
    //unsubscribe calculation timer in case the page was left with timer was in progress.
    //this is to make sure that only single instance of the timer is running
    if(this.calculationtimersubscribe) // condition to handle in case the timer is not initiated and user try to leave the page
      this.calculationtimersubscribe.unsubscribe();
  }
}
