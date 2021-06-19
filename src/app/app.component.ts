import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dogs Collection';
  
  
  constructor(private titleService: Title) {
    titleService.setTitle("Dogs Collection");
  }
}
