import { Component, OnInit } from '@angular/core';
import { ApiService } from '../entradaapi/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})

export class EntradaComponent implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.enviarCsv('https://www.datos.gov.co/resource/t2ca-uae5.json');
  }

  enviarCsv(urlCsv: string) {
    // Construye el cuerpo de la solicitud
    const body = {
      urlCsv: urlCsv
    };

    // Configura las cabeceras para indicar que se está enviando datos en formato crudo
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Puedes ajustar el tipo de contenido según lo que acepte la API
    });

    // Realiza la solicitud POST
    this.http.get('https://www.datos.gov.co/resource/t2ca-uae5.json', { headers: headers })
      .subscribe(
        (response) => {
          console.log('Respuesta:', response);
          // Aquí puedes manejar la respuesta de la API
        },
        (error) => {
          console.error('Error:', error);
          // Manejar errores si es necesario
        }
      );
  }
}



/*
export class EntradaComponent implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.enviarCsv('\\mercurio\PROYECTOS\WMS_Aqua\CSV\1.csv');
  }

  enviarCsv(urlCsv: string) {
    // Construye el cuerpo de la solicitud
    const body = {
      urlCsv: urlCsv
    };

    // Configura las cabeceras para indicar que se está enviando datos en formato crudo
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Puedes ajustar el tipo de contenido según lo que acepte la API
    });

    // Realiza la solicitud POST
    this.http.post('https://localhost:44334/ConversionDatos', JSON.stringify(body), { headers: headers })
      .subscribe(
        (response) => {
          console.log('Respuesta:', response);
          // Aquí puedes manejar la respuesta de la API
        },
        (error) => {
          console.error('Error:', error);
          // Manejar errores si es necesario
        }
      );
  }
}
*/


/*
export class EntradaComponent {
  textInput: string = '';
  apiUrl: string = 'https://localhost:44334/ConversionDatos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}



  enviarTexto(): void {
    const body = {
      urlCsv: { texto: this.textInput }
    };

   // Configura las cabeceras para indicar que se está enviando datos en formato crudo
   const headers = new HttpHeaders({
    'Content-Type': 'application/json' // Puedes ajustar el tipo de contenido según lo que acepte la API
  });


    // Realiza una solicitud HTTP POST a la API con el texto como parámetro
    this.http.post(this.apiUrl, JSON.stringify(body), { headers: headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API aquí
        console.log('Respuesta de la API:', response);
      },
      (error) => {
        // Maneja los errores aquí
        console.error('Error al enviar el texto a la API:', error);
      }
    );
  }
}*/









//export class EntradaComponent implements OnInit {
/*export class EntradaComponent implements OnInit{

  data: any={};
  constructor(private entradaapi : ApiService){}

  ngOnInit():void{
    this.llenarData()
  }


  llenarData():void{
    this.entradaapi.GetData().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    })
  }
}*/
