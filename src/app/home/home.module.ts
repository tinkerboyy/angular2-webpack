import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home.component';
import { TwitterService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
  providers: [TwitterService]
})
export class HomeModule {}
