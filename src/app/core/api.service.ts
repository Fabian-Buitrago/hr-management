import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getData<T>(url):Observable<T>{
    return this.http.get<T>(url);
  }

}
