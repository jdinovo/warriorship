import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  pointA: number;
  pointB: number;
  pointC: number;
  pointD: number;
  winningResult: number;
  @Output() quizResultsEvent = new EventEmitter<number>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private questionsService: QuestionsService,
              private breakpointObserver: BreakpointObserver) { }


  ngOnInit() {
    this.pointA = 0;
    this.pointB = 0;
    this.pointC = 0;
    this.pointD = 0;
    this.winningResult = 0;

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

    // for adjusting button layout based on screen size
    const layoutChanges = this.breakpointObserver.observe([
      '(max-width: 980px)',
      '(max-width: 600px)'
    ]);

    layoutChanges.subscribe(result => {
      console.log(result);
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
      this.addPoint(id);
      this.questionsService.updateQuestion(this.question).subscribe(
        c => {
          console.log(c);
          this.loading = false;

          console.log('A:' + this.pointA);
          console.log('B:' + this.pointB);
          console.log('C:' + this.pointC);
          console.log('D:' + this.pointD);
        });

      if (this.id < this.numOfQuestions) {
        this.router.navigate(['/questions', this.id + 1]);
      } else {
        this.router.navigate(['/results']);
      }
    }
  }

  addPoint(questionAnswer) {
    if (questionAnswer === 0) {
      this.pointA++;
    } else if (questionAnswer === 1) {
      this.pointB++;
    } else if (questionAnswer === 2) {
      this.pointC++;
    } else if (questionAnswer === 3) {
      this.pointD++;
    } else {
      console.error('Incorrect questionAnswer');
    }
    this.calculateHighestTally();
  }

  calculateHighestTally() {
    if (this.pointA > this.pointB &&
      this.pointA > this.pointC &&
      this.pointA > this.pointD) {
      this.winningResult = 0;
    } else if (this.pointB > this.pointA &&
      this.pointB > this.pointC &&
      this.pointB > this.pointD) {
      this.winningResult = 1;
    } else if (this.pointC > this.pointA &&
      this.pointC > this.pointB &&
      this.pointC > this.pointD) {
      this.winningResult = 2;
    } else if (this.pointD > this.pointA &&
      this.pointD > this.pointB &&
      this.pointD > this.pointC) {
      this.winningResult = 3;
    }

    console.log('winning result so far:' + this.winningResult);
    if (this.id === this.numOfQuestions) {
      console.log('winningresult was emitted:' + this.winningResult);
      this.quizResultsEvent.emit(this.winningResult);
    }
  }

}
