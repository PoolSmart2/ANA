import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private urlapi ='https://localhost:44334/ConversionDatos';
  constructor(private http: HttpClient) { }

  public GetData(): Observable<any>{
  return this.http.get<any>(this.urlapi);
  }
}
