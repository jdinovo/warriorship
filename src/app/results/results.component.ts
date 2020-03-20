import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {AnswersService} from '../answers.service';
import {Question} from '../question-helper';
import {Answer} from '../answer-helper';
import {QuestionCardComponent} from '../question-card/question-card.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  result: number;

  @ViewChild(QuestionCardComponent) questionCard;

  constructor() { }

  receiveResults($event) {
    this.result = $event;
  }

}
