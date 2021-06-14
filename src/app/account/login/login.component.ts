import { Component, OnInit } from '@angular/core';
import {  AccountService } from  '../shared/account.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Usuario} from '../login/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(){

  }

  ngOnInit(): void {
   
  }

  fazerLogin(): void {
    
  }

}
