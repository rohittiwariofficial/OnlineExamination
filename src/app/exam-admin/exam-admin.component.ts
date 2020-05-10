import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fn } from '@angular/compiler/src/output/output_ast';

// declare var require: any
declare var jQuery: any;

@Component({
  selector: 'app-exam-admin',
  templateUrl: './exam-admin.component.html',
  styleUrls: ['./exam-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExamAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
