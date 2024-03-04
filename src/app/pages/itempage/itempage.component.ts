import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrederDetailsService } from 'src/app/services/oreder-details.service';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrederDetailsService) { }
  getItemId:any;
  itemData:any;

  ngOnInit(): void {
      this.getItemId = this.param.snapshot.paramMap.get('id');
      console.log(this.getItemId,'getitem');
      if(this.getItemId)
      {
        this.itemData = this.service.itemDetails.filter((value)=>{
          return value.id == this.getItemId;
        });
        console.log(this.itemData,'itemdata>>');
      }
  }

}
