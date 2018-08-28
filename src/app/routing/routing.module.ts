import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmsFirstPageComponent } from '../pages/dmsfirstpage/dmsfirstpage.component';
import { DmspdfviewerComponent } from '../pages/dmspdfviewer/dmspdfviewer.component';


const routes: Routes = [
    { path: '', redirectTo: '/dmsfirstpage', pathMatch: 'full' },
    { path: 'dmsfirstpage',    component:DmsFirstPageComponent },
    { path: 'dmspdfviewer/:pdf',    component:DmspdfviewerComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
