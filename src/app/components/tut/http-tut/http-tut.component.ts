import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-tut',
  templateUrl: './http-tut.component.html',
  styleUrls: ['./http-tut.component.scss'],
})
export class HttpTutComponent {
  url = 'https://jsonplaceholder.typicode.com/posts';

  posts$: Observable<Post[] | Post> | null = null;

  constructor(private http: HttpClient) {}

  get(id: string) {
    if (id) {
      this.posts$ = this.http.get<Post>(`${this.url}/${id}`);
      return;
    }

    this.posts$ = this.http.get<Post[]>(this.url);
  }

  post(json: string) {
    this.posts$ = this.http.post<Post>(this.url, JSON.parse(json));
  }

  patch(id: string, json: string) {
    this.posts$ = this.http.patch<Post>(`${this.url}/${id}`, JSON.parse(json));
  }

  delete(id: string) {
    this.posts$ = this.http.delete<Post>(`${this.url}/${id}`);
  }
}
