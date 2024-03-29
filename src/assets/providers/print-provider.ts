import { Injectable } from '@angular/core';
import * as domtoimage from 'dom-to-image';

//npm i dom-to-image
@Injectable()
export class PrintProvider{
  constructor() {}

    print(componentName) {
      var node = document.getElementById(componentName);

      domtoimage.toPng(node).then(function (dataUrl) {
        console.log(dataUrl)
        var popup=window.open();
        popup.document.write ('<img src =' + dataUrl + '>');
        popup.document.close ();
        popup.focus ();
        setTimeout(function (){
          popup.print();
          popup.close ();
          
        }, 2000);
      })
      .catch(function (error) {
        console.log(error)
        //          console.error('oops, something went wrong!', error);
      });
    }

}