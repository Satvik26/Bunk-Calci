import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  tc;
 ca;
 ma;
 
  constructor(public navCtrl: NavController , private alertctrl: AlertController) {
  }
  
    perc(){

      var a = parseInt(this.tc);
      var b = parseInt(this.ca);
      var d = parseInt(this.ma);
      var c = (b/a)*100;
       var e = b-((d*a)/100);
       var f= -e;
    
      
   if (c>d) {
   let alert= this.alertctrl.create({
     title : "Your current percentage= " + c ,
     subTitle: "You can bunk "+ e + " classes",
     cssClass: 'alertCustomCss'
   });
   alert.present();
    }    
    else  {
   let alert= this.alertctrl.create({
     title: "Your current percentage= " + c ,
     subTitle: "You have to sit for " + f+ " classes to get " + d, 
      cssClass: 'alertCustomCss'
   });
   alert.present();

    }
     
  }
     
}
