import { Component, OnInit } from "@angular/core";
import { Iproduct } from './product.interface';
import { ProductService } from './product.service';


@Component({
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
    [x: string]: any;
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts =  this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    products:Iproduct[]
    filteredProducts:Iproduct[];
    
      constructor(private productService: ProductService){
          
      }
      toggleImage():void{
          this.showImage = !this.showImage;
      }
      performFilter(filterBy:string):Iproduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:Iproduct)=>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      }
      ngOnInit(){
        this.productService.getProducts().subscribe(
          products=>{
        this.products = products;
        this.filteredProducts = products;
        console.log(this.products)
          }
        )
      }
}