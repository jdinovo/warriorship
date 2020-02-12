import { Injectable } from '@angular/core';
import {Question} from './question-helper';
import {QUESTIONS} from './questionDb';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const questions: Question[] = QUESTIONS;
    return {questions}
      ;
  }
}
