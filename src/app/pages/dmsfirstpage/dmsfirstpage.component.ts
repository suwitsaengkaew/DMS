import { Component, OnInit } from '@angular/core';
import { InfoService, Company } from '../../services/infoservice.service';
import { Router } from '@angular/router';
import { DmspdfviewerComponent } from '../dmspdfviewer/dmspdfviewer.component';

import notify from 'devextreme/ui/notify';

@Component({
    moduleId: module.id,
    selector: 'dmsfirst-page',
    templateUrl: './dmsfirstpage.component.html',
    styleUrls: ['./dmsfirstpage.component.css']

})

export class DmsFirstPageComponent implements OnInit {

  plant: any;
  section: any;
  doctype: any;  
  //selectedplant: any;
  selectedplant = null;
  selectedsection = null;
  selecteddoctype = null;  
  plantcolor: string;
  sectioncolor: string;
  doctypecolor: string;
  applyButtonOptions: any;
  
  dataSource: any; //: Company[];
  constructor(private service : InfoService, private router: Router
) {
    //this.dataSource = service.getCompanies();
    this.applyButtonOptions = {
            text: 'Search Document',
            type:'success'
            // onClick: function (e) {
            //     notify("the Ok button was clicked");
            // }
        }

    if (localStorage.getItem('plant') != null && 
        localStorage.getItem('section') != null && 
        localStorage.getItem('doctype') != null) {

        this.selectedplant = localStorage.getItem('plant');
        this.selectedsection = localStorage.getItem('section');
        this.selecteddoctype = localStorage.getItem('doctype');
      this.getDocument(this.selectedplant, this.selectedsection, this.selecteddoctype);
    }
  }

  ngOnInit() {
    this.service.requestDocPlant().subscribe(res => { this.plant = res; });        
    this.service.requestDocSection().subscribe(res => { this.section = res; });
    this.service.requestDocType().subscribe(res => { this.doctype = res; });
  }

  getDocument(_plant:any, _section:any, _doctype:any) {
    if (_plant != null && _section != null && _doctype != null) {
      this.service.requestDocument(_plant, _section, _doctype)
      .subscribe( res => { this.dataSource = res });

      localStorage.setItem('plant',_plant);
      localStorage.setItem('section',_section);
      localStorage.setItem('doctype',_doctype);

      this.selectedplant = localStorage.getItem('plant');
      this.selectedsection = localStorage.getItem('section');
      this.selecteddoctype = localStorage.getItem('doctype');

    } else {
      if (_plant == null) { this.plantcolor = 'red'; }
      if (_section == null) { this.sectioncolor = 'red'; }
      if (_doctype == null) { this.doctypecolor = 'red'; }
      notify("Please select 'Plant', 'Section' and 'Document Type' first...");
    }
        
  }

  SelectionChanged(selected: string) {
    if (selected == 'plant') { this.plantcolor = null }
    if (selected == 'section') { this.sectioncolor = null }
    if (selected == 'doctype') { this.doctypecolor = null }
  }

  gotopdfviewer(pdf: string) {
    this.router.navigate(['/dmspdfviewer', pdf]);
    //notify("Go to PDF Viewer " + pdf);
  }

}