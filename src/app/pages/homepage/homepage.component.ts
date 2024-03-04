import { Component, OnInit } from '@angular/core';
import { OrederDetailsService } from 'src/app/services/oreder-details.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:OrederDetailsService) { }
  itemData:any;
  ngOnInit(): void {
    this.itemData = this.service.itemDetails;
  }
}
