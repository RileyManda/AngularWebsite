import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AngularFirestore } from '@angular/fire/firestore';


export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
};

import {
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatBottomSheetModule,
  MatTooltipModule,
  MatBottomSheet,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  
  
  
} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MToolbarComponent } from './m-toolbar/m-toolbar.component';
import { MCardComponent } from './m-card/m-card.component';
import { MBottomSheetComponent } from './m-bottom-sheet/m-bottom-sheet.component';
import { MExpComponent } from './m-exp/m-exp.component';
import { MCvComponent } from './m-cv/m-cv.component';
import { MPortfolioComponent } from './m-portfolio/m-portfolio.component';
import { MHobbiesComponent } from './m-hobbies/m-hobbies.component';
import { MMatrixComponent } from './m-matrix/m-matrix.component';
import { MChatfabComponent } from './m-chatfab/m-chatfab.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { MTabsComponent } from './m-tabs/m-tabs.component';




const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'm-exp', component: MExpComponent},
  { path: 'm-cv', component: MCvComponent},
  { path: 'm-portfolio', component: MPortfolioComponent},
  { path: 'm-hobbies', component: MHobbiesComponent},
  { path: 'm-matrix', component: MMatrixComponent},
  { path: 'login', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MToolbarComponent,
    MCardComponent,
    MBottomSheetComponent,
    MExpComponent,
    MCvComponent,
    MPortfolioComponent,
    MHobbiesComponent,
    MMatrixComponent,
    MChatfabComponent,
    LoginComponent,
    MTabsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    LayoutModule,
    MatBottomSheetModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule

    
    
  ],
  providers: [],
  entryComponents:[MBottomSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {}



  ngOnInit() {
  }


}
