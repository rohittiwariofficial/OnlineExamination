import { Component, OnInit,ViewEncapsulation } from '@angular/core';
declare  var jQuery:  any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
       setTimeout(function() {
        // after 1000 ms we add the class animated to the login/register card
        $('.card').removeClass('card-hidden');
      }, 700);
    });
  }

}
