/** 
 * All rights reserved to company.ltd
 * Details Component
 * Create By : Dhaval Shah (company name)
 * Created On : 2019-04-16
 * Updated By :
 * Updated On :
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { timerDetail } from 'src/model/model';
import { Project } from 'src/project';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPage implements OnInit {
  public timerDetail : timerDetail;
  constructor(public nav : NavController) { 

  }

  ngOnInit() {
    if(Project.timerDetail)
    {
      console.log("Object Received");
      console.log(Project.timerDetail);
      this.timerDetail = Project.timerDetail;
    }
  }
  goback()
  {
    this.nav.back();
  }

}
