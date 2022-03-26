import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlcutService {

  constructor(private http: HttpClient) { }
urlcut(url:any){
 return this.http.get<any>(`https://api.shrtco.de/v2/shorten?url=${url}`)
}
}
