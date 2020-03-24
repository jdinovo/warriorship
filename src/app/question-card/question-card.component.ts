import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../question-helper';
import {fadeInAnimation} from '../animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {QUESTIONS} from '../questionDb';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  animations: [fadeInAnimation],
})
export class QuestionCardComponent implements OnInit {

  questionsList: Question[] = QUESTIONS;
  counter: number;
  question: Question;
  questions: Question[];
  numOfQuestions = 10;
  loading = false;
  numOfCols = 2;
  rowHeight = '2:1';
  points: number[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) { }


  ngOnInit() {
    this.points = [0, 0, 0, 0];
    this.counter = 1;
    this.questions = [];

    for (let i = 0; i < this.numOfQuestions; i++) {
      let random = Math.floor((Math.random() * this.questionsList.length));
      while (this.questions.indexOf(this.questionsList[random]) !== -1) {
        random = Math.floor((Math.random() * this.questionsList.length));
      }
      this.questions.push(this.questionsList[random]);
    }

    console.log(this.questions);
    this.question = this.questions[0];

    // for adjusting button layout based on screen size
    const layoutChanges = this.breakpointObserver.observe([
      '(max-width: 780px)',
      '(max-width: 400px)'
    ]);

    layoutChanges.subscribe(result => {
      if (result.breakpoints['(max-width: 400px)']) {
        this.numOfCols = 1;
        this.rowHeight = '2:1';
      } else if (result.breakpoints['(max-width: 780px)']) {
        this.numOfCols = 1;
        this.rowHeight = '4:1';
      } else {
        this.numOfCols = 2;
        this.rowHeight = '3:1';
      }
    });
  }

  saveAnswer(id: number) {
    if (!this.loading) {
      this.loading = true;
      this.question.selectedAnswer = id;
      console.log(this.points);
      this.points[id] += 1;
      console.log(this.question);
      setTimeout(_ => {
        this.loading = false;

        console.log(this.points);

        if (this.questions.indexOf(this.question) + 1 < this.questions.length) {
          this.question = this.questions[this.questions.indexOf(this.question) + 1];
          this.counter++;
        } else {
          this.router.navigate(['/results'], {state: {winner: this.points.indexOf(Math.max.apply(Math, this.points))}});
        }
      }, 250);
    }
  }

  backOneQuestion() {
    this.question = this.questions[this.questions.indexOf(this.question) - 1];
    this.counter--;
  }

}
