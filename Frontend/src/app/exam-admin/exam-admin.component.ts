import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fn } from '@angular/compiler/src/output/output_ast';

declare  var jQuery:  any;
declare var $: any;

@Component({
  selector: 'app-exam-admin',
  templateUrl: './exam-admin.component.html',
  styleUrls: ['./exam-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExamAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#minimizeSidebar").click(function() {
      $("body").toggleClass("sidebar-mini");
      console.log('Fired');
    })(jQuery);

    function setfocusmapcenter() {    
      var mapobj = $('#map').vectormap('get', 'mapobject'),         
      center = mapobj.pointtolatlng(mapobj.width / 2, mapobj.height / 2);      
      var config = {         
        animate: true,         
        lat: center.lat,         
        lng: center.lng,         
        scale: 1     
      }      
      mapobj.setfocus(config) 
    }(jQuery)
  }

}
