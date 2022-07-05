import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaExcel';

  workbook = XLSX.utils.table_to_book(document.getElementById("tableau"));

}
