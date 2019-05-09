import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.set('name', 'João').then(
      () => {
        this.storage.get('name').then((val) => {
          console.log('Your age is', val);
        });
      }
    );


    
    this.formlogin = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginUser(user) {
    this.authService.loginUser(user).then(
      res => this.router.navigateByUrl('/idea-list')
    )
  }

  goToRegisterPage(){
    this.router.navigateByUrl('/register');
  }

}
