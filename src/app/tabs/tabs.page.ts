/** 
 * All rights reserved to company.ltd
 * Tab/Segment Component
 * Create By : Dhaval Shah (company name)
 * Created On : 2019-04-16
 * Updated By :
 * Updated On :
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  showtimerpage()
  {
      this.nav.navigateRoot("/timer-page");
  }

}
