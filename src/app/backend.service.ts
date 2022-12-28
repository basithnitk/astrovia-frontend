import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl: string = `http://localhost:8080/admin/generateReport`
  constructor(private http: HttpClient) { }

  getStatement() {
    return this.http.get(this.baseUrl);
  }

}
