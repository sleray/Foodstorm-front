import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorsComponent } from './contributors.component';
import { ContributorsService } from './contributors.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ContributorsComponent],
  providers: [
    ContributorsService
    
  ]
})
export class AboutModule { }
