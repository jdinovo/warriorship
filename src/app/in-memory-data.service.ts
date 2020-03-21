import { Injectable } from '@angular/core';
import {Question} from './question-helper';
import {QUESTIONS} from './questionDb';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ANSWERS} from './answerDb';
import {Answer} from './answer-helper';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const questions: Question[] = QUESTIONS;
    const answers: Answer[] = ANSWERS;

    return {questions, answers};
  }
}
