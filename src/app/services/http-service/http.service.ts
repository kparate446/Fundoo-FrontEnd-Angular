import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(url, data) {
    return this.http.post(url, data);
  }
  get(url, data) {
    return this.http.get(url, data);
  }
  put(url, data) {
    return this.http.put(url, data);
  }
  delete(url, data) {
    return this.http.delete(url, data);
  }
}
