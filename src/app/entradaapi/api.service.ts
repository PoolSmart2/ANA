import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private urlapi ='https://apilogisticatransporte.grupoafin.com/ConversionDatos';
  constructor(private http: HttpClient) { }

  public GetData(): Observable<any>{
  return this.http.get<any>(this.urlapi);
  }
}
