import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	get(url: string): Observable<any> {
		return this.http.get(url);
	}

	post(url: string, body: any, reqOpts?: any): Observable<any> {
		return this.http.post(url, body, reqOpts);
	}

	put(url: string, body: any, reqOpts?: any): Observable<any> {
		return this.http.put(url, body, reqOpts);
	}

	delete(url: string, reqOpts?: any): Observable<any> {
		return this.http.delete(url, reqOpts);
	}
}
