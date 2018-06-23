import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, delay } from 'rxjs/operators';

@Injectable()
export class UsersService {
  readonly url = `https://api.github.com/users`;

  constructor(private http: HttpClient) {}

  loadDoctors() {
    const requestUrl = `${this.url}`;
    return this.http.get(requestUrl).pipe(delay(500));
  }
}
