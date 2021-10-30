import { Component, OnInit } from '@angular/core';
import {TableService} from '../table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    searchText:any
    data: Array<any>
    totalRecords: number=0
    page:number=1

  constructor(private randomUser :TableService) {
    this.data = new Array<any>()
   }

  ngOnInit(): void {
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      console.log(data)
      this.data = data.results
      this.totalRecords = data.results.length
    })
  }
  orderHeader:string='';
  sort(headerName:string){
    this.orderHeader = headerName;
  }
}
