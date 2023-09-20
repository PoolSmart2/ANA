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
    this.enviarCsv('C:/Users/desarrollo1/Downloads/centros_atencion_metrosalud.csv');
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
