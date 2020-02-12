import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Question} from './question-helper';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {

    return this.http.get<Question[]>('api/questions');
  }

  getQuestionItem(id): Observable<Question> {

    return this.http.get<Question>('api/questions/' + id);
  }

  addQuestion(c: Question): Observable<Question> {

    return this.http.post<Question>('api/questions', c, this.httpOptions);
  }

  updateQuestion(c: Question): Observable<Question> {

    return this.http.put<Question>('api/questions', c, this.httpOptions);
  }

  deleteQuestion(c: Question): Observable<Question> {

    return this.http.delete<Question>('api/questions/' + c.id, this.httpOptions);
  }

}
