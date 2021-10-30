import { Component, OnInit } from '@angular/core';
import {TableService} from '../table.service';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  firstName:any
  data: Array<any>
  users=[]
  searchText:any
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
fileName= 'ExcelSheet.xlsx';
  exportexcel(): void
   {
     /* get the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);

   }
   orderHeader:String='';
   sort(headerName:String){
     this.orderHeader = headerName;
   }

}
