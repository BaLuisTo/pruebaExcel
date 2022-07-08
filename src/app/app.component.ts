import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    data: any[];

    cols: any[];
  
  ngOnInit(): void {
    const doc = new jsPDF("portrait", "pt", 'a4');
      doc.html(document.getElementById('contenidoPDF'), {
        x: 0,
        y: 0,
        margin: [0, 24, 24, 24],
        callback: () => {
         // doc.save();
        },
      });
      const pageCount = doc.internal.pages
      console.log(pageCount);
      

    /*DATOS TABLA*/
      this.data = [
        {
            name: 1,
            author: "prueba1",
            price: "categoria"
        },
        {
            name: 1,
            author: "prueba1",
            price: "categoria"
        }
      ]


    this.cols = [
        { field: 'name', header: 'Name' },
        {field: 'author', header: 'Author' },
        { field: 'price', header: 'Price' }      
    ];
    
  }
}