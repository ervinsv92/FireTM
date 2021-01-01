import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { DataService } from 'src/app/shared/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  async login(){
    try{
      const userFire = await this.dataService.login(this.user);
      console.log(userFire)
      this.router.navigate(['/home']);
    }catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
      })
    }
    
    
  }
}
