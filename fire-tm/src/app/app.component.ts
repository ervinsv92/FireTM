import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fire-tm';

  constructor(public dataService:DataService){

    this.dataService.signedIn.subscribe((user) => {
      if (user) {
          this.dataService.isUserLogin = true;
      } else {
        this.dataService.isUserLogin = false;
      }
  });
  }

  ngOnInit(): void {
   
  }
}
