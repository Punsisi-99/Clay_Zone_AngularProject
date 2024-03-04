import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrederDetailsService {

  constructor() { }

  // iteamdetails

  itemDetails = [
    {
      id:1,
      itemName:"Wind chains",
      itemDetails:"swings with winds",
      itemPrice:900,
      itemImg: url('../../../assets/item_1.jpg')
    },
    {
      id:2,
      itemName:"Decorative Vases",
      itemDetails:"this vase can use for decorate inside your home",
      itemPrice:2000,
      itemImg: url('../../../assets/item_2.png')
    },
    {
      id:3,
      itemName:"Table lamp covers",
      itemDetails:"can use to decorate your table lamp ",
      itemPrice:1600,
      itemImg:"../../../assets/item_3.jpg"
    },
    {
      id:4,
      itemName:"Tea Cups",
      itemDetails:"6 cups in one bunch",
      itemPrice:3000,
      itemImg:"../../../assets/iteam_4.jpg"
    },
    {
      id:5,
      itemName:"Water Bottle",
      itemDetails:"healthy bottle and drink cool water",
      itemPrice:2400,
      itemImg:"../../../assets/item_5.jpg"
    },
    {
      id:6,
      itemName:"Plate",
      itemDetails:"take your food without any diseases",
      itemPrice:700,
      itemImg:"../../../assets/item_6.jpg"
    },
  ]
}
