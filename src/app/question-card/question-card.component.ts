import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions.service';
import {Question} from '../question-helper';
import {fadeInAnimation} from '../animations';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  animations: [fadeInAnimation],
})
export class QuestionCardComponent implements OnInit {

  id: number;
  question: Question;
  numOfQuestions: number;
  questionAnswer: number;

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionAnswer = null;
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.questionsService.getQuestionItem(this.id).subscribe(
        c => {
          this.question = c;
          this.questionAnswer = c.selectedAnswer;
        });
      this.questionsService.getQuestions().subscribe(
        c => {
          this.numOfQuestions = c.length;
        });
    });
  }

  saveAnswer() {
    this.question.selectedAnswer = this.questionAnswer;
    this.questionsService.updateQuestion(this.question).subscribe(
      c => {
        console.log(c);
      });
  }

}
