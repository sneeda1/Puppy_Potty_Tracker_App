import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit{
  [x: string]: any;
  constructor() {
  }

 ngOnInit() {
   
 }
  
home() {
  this.router.navigate(['/home'])

}
}

  


  


