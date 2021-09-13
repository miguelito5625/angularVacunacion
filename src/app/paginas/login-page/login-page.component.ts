import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginInterface } from 'src/app/interfaces/login-interface';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    cui: new FormControl('123456789'),
    clave: new FormControl('12345'),
  });
  tokenString: any;

  constructor(
    private authService: AuthService
  ) {



  }

  ngOnInit(): void {
    // this.tokenString = localStorage.getItem('token');
    // const tokendata: any = jwt_decode(this.tokenString);
    // console.log(tokendata);
    
    // const exp = tokendata.exp  * 1000;
    // const nowTime = Date.now();
  
    // if (nowTime >= exp) {
    //   console.log("token expiro");
    // } else {
    //   console.log("token aun no ha expirado");

    // }

  }

  loginSubmit() {
    const data: LoginInterface = this.loginForm.value;
    console.log(data);
    this.authService.login(data);
  }



}
