import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const workbook = XLSX.utils.table_to_book(document.getElementById("table"));
    console.log(workbook);
    
  }
  title = 'pruebaExcel';

  

}
