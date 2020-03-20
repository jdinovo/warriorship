import { Component, OnInit } from '@angular/core';
import {Answer} from '../answer-helper';
import {AnswersService} from '../answers.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  warriors: Answer[];

  constructor(private answersService: AnswersService) { }

  ngOnInit(): void {
    this.answersService.getAnswers().subscribe(answers => {
      this.warriors = answers;
    });
  }

}
