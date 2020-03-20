import {Component, OnInit} from '@angular/core';
import {AnswersService} from '../answers.service';
import {Answer} from '../answer-helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  result: number;
  warrior: Answer;

  constructor(private answersService: AnswersService, private router: Router) { }

  ngOnInit() {
    this.result = history.state.winner;

    if (this.result === undefined) {
      this.router.navigate(['/']);
    } else {
      this.answersService.getAnswerItem(this.result).subscribe(answer => {
        console.log(answer);
        this.warrior = answer;
      });
    }
  }

}
