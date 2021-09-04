import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule} from '@angular/material/card'; 
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatToolbarModule} from '@angular/material/toolbar';  
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import{MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
    
    
   
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
