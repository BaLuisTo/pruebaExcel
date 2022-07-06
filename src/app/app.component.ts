import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  ngOnInit(): void {
    
    
  }

  descargarPDF(){

    const doc = new jsPDF("portrait", "pt", 'a4');
      doc.html(document.getElementById('container'), {
        x: 0,
        y: 0,
        margin: [0, 0, 100, 0],
        callback: () => {
          doc.save();
        },
      });
    



    //////////////////////////////////////////////////////////////////////
    
    //seleccion de lo que se quiere en el pdf
    // const DATA = document.getElementById('container');

    // const doc = new jsPDF('p', 'pt', 'a4');

    // const options = {
    //   background: 'white',
    //   scale: 3
    // }
      // doc.html(document.body, {
      //         x: 0,
      //         y: 0,
      //         autoPaging: 'text',
      //         margin: [700, 0, 700, 0],
              
      //         callback: () => {
      //           doc.save();
      //         },
      //       });

    // html2canvas(DATA, options).then((canvas) => {

    //   const img = canvas.toDataURL('image/PNG');

    //   // Add image Canvas to PDF
    //   const bufferX = 15;
    //   const bufferY = 15;
    //   const imgProps = (doc as any).getImageProperties(img);
    //   const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      

    //   doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      
    //   return doc;}).then((docResult) => {
    //   docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    // });
  }

  title = 'pruebaExcel';

  

}
