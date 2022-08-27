import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aaplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:5000/users'

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  findById(userId: any): Observable<User> {
    const apiUrl = `${this.url}/${userId}`
    return this.http.get<User>(apiUrl)
  }

  create(user: User): Observable<any> {
    console.log(user)
    return this.http.post<User>(this.url, user)
  }

  update(user: User): Observable<any> {
    return this.http.put<User>(this.url, user, httpOptions)
  }

  delete(userId: any): Observable<any> {
    const apiUrl = `${this.url}/${userId}`
    return this.http.delete<any>(apiUrl, httpOptions)
  }
}
