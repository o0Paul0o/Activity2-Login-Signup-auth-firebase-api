import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiKey:any='64d9a6fadc694461a44506f8865523a2';
  constructor(public http:HttpClient) { }
  
  getNews(topic){
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2022-07-06&sortBy=publishedAt&apiKey='+this.apiKey);
  }
}
