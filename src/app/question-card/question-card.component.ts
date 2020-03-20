import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionsService} from '../questions.service';
import {Question} from '../question-helper';
import {fadeInAnimation} from '../animations';
import {BreakpointObserver} from '@angular/cdk/layout';

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
  loading = false;
  numOfCols = 2;
  rowHeight = '2:1';

  constructor(private router: Router, private route: ActivatedRoute, private questionsService: QuestionsService, private breakpointObserver: BreakpointObserver) { }


  ngOnInit() {
    this.questionAnswer = null;
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.questionsService.getQuestionItem(this.id).subscribe(
        c => {
          this.question = c;
          this.questionAnswer = c.selectedAnswer;
        }
      );
      this.questionsService.getQuestions().subscribe(
        c => {
          this.numOfQuestions = c.length;
        }
      );
    });

    // for adjusting button layout based on screen size
    const layoutChanges = this.breakpointObserver.observe([
      '(max-width: 980px)',
      '(max-width: 600px)'
    ]);

    layoutChanges.subscribe(result => {
      if (result.breakpoints['(max-width: 600px)']) {
        this.numOfCols = 1;
        this.rowHeight = '2:1';
      } else if (result.breakpoints['(max-width: 980px)']) {
        this.numOfCols = 1;
        this.rowHeight = '3:1';
      } else {
        this.numOfCols = 2;
        this.rowHeight = '2:1';
      }
    });
  }

  saveAnswer(id: number) {
    if (!this.loading) {
      this.loading = true;
      this.question.selectedAnswer = id;
      this.questionsService.updateQuestion(this.question).subscribe(
        c => {
          console.log(this.question);
          this.loading = false;
        });

      if (this.id < this.numOfQuestions) {
        this.router.navigate(['/questions', this.id + 1]);
      } else {
        this.router.navigate(['/results']);
      }
    }
  }

}
