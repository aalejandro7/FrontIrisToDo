import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  getAllToDoes() {
    const url = `${environment.API}todoes`;
    return this.http.get(url);
  }

}
