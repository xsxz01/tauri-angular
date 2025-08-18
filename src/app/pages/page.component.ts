import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabBarComponent } from '../components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-page',
  imports: [
    CommonModule,
    RouterModule,
    TabBarComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
