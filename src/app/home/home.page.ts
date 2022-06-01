import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  export class HomePage implements OnInit {
    [x: string]: any;
    
  
    constructor() {
    }
  
    ngOnInit() {
      
        }
     
    loginuser() {
  this.router.navigate(['/login-user'])

}
rg() {
  this.router.navigate(['/rg'])

} 
    
  }