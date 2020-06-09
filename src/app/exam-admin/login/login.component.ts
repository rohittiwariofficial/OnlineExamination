import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare  var jQuery:  any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (!!localStorage.getItem('token')) { 
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['kacs.rohit.1994@gmail.com', Validators.required],
        password: ['Admin@123', Validators.required]
    });

    $(document).ready(function() {
      setTimeout(function() {
        // after 1000 ms we add the class animated to the login/register card
        $('.card').removeClass('card-hidden');
      }, 700);
    })(jQuery);
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    
    if ( this.f.email.value == 'kacs.rohit.1994@gmail.com' && 
        this.f.password.value == 'Admin@123' 
    ) {
      console.log(this.f);
      localStorage.setItem('token', 'Admin LoggedIn!!');
      this.router.navigate(['/admin']);
    }
    
  }
}
