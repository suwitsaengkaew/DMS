import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-dmspdfviewer',
  templateUrl: './dmspdfviewer.component.html',
  styleUrls: ['./dmspdfviewer.component.css']
})
export class DmspdfviewerComponent implements OnInit {
  title: string;
  pdfurl: string;
  safeUrl: SafeResourceUrl;
  selectedplant = null;
  selectedsection = null;
  selecteddoctype = null;
  applyButtonOptions: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {
    this.applyButtonOptions = {
            text: 'Back Previous Page',
            type:'success',
            icon: 'back'
            // onClick: function (e) {
            //     notify("the Ok button was clicked");
            // }
        }
   }
    
  ngOnInit() {
    this.title = 'This is PDF Viewer Pages';
    this.pdfurl = this.route.snapshot.params['pdf']+"#toolbar=0&navpanes=0&scrollbar=0&zoom=100";
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfurl);
  }

  onbuttonBackClicked() {
    //this.location.back(); //ผมลัพธ์เหมือนกัน
    //window.history.back();
    this.router.navigate(['/dmsfirstpage']);
  }
}
