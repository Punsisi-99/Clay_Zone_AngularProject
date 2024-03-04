import { Component, OnInit } from '@angular/core';
import { OrederDetailsService } from 'src/app/services/oreder-details.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  constructor(private service:OrederDetailsService) { }
  itemData:any;
  ngOnInit(): void {
      this.itemData = this.service.itemDetails;
  }

}
