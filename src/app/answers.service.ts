import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from './question-helper';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Answer} from './answer-helper';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAnswerItem(id): Observable<Answer> {
    return this.http.get<Answer>('api/answers/' + id);
  }
}
