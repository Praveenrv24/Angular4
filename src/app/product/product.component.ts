import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  title:string = '';
  description:string = '';
  
  product = [
    { "title": 'USB Car Charger', "description": "My description here" },
    { "title": 'Pendrive', "description": null }
  ];


  
  addProdut(value:any){
    this.product.push({'title': value.title, 'description': value.description});
    this.title = '';
    this.description = '';
  }
  removeProduct(product){
    this.product.splice(product,1);
  }

}
