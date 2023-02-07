import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inputplaceholder="account number"
  data="your perfect banking partner (◠‿◠)"
  // acno:any
  // passwrd:any
  userDetails:any=
  {
  1000:{acno:1000,username:"joel",password:"joel@123",balance:0},
  1001:{acno:1001,username:"akshay",password:"akshay@123",balance:0},
  1002:{acno:1002,username:"sourav",password:"sourav@123",balance:0},
  1003:{acno:1003,username:"murali",password:"murali@123",balance:0},
  1004:{acno:1004,username:"ajay",password:"ajay@123",balance:0},
  }
  constructor() { }
  // login(){
  //   //alert("processing")
  //   var acnum=this.acno
  //   var passwrd=this.passwrd 
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails)
  //   {
  //     if(passwrd==userDetails[acnum]["password"])
  //     {
  //       alert("login sucess!!!")
  //     }
  //     else{
  //       alert("incorret password")
  //     }

  //   }
  //   else{
  //     alert("incorrect account number")
  //   }
  // }
  login(a:any,b:any){
    //alert("processing")
    var acnum=a.value
    var passwrd=b.value
    var userDetails=this.userDetails
    if(acnum in userDetails)
    {
      if(passwrd==userDetails[acnum]["password"])
      {
        alert("login sucess!!!")
      }
      else{
        alert("incorret password")
      }

    }
    else{
      alert("incorrect account number")
    }
  }
//   acnoChange(event:any) 
//   {
//     this.acno=event.target.value
//     //console.log(this.acno);
    
//   }
//   pswrdChange(event:any)
//   {
//     this.passwrd=event.target.value
//    //console.log(this.passwrd);
    

//   }
}
