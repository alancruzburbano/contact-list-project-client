import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  getAll(origindata): Observable<any> {    
    return this.http.get('//localhost:8080/contacts?orig='+origindata);
  }
}
