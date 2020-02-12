import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions.service';
import {Question} from '../question-helper';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  id: number;
  question: Question;

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.questionsService.getQuestionItem(this.id).subscribe(
        c => {
          this.question = c; console.log('This is Question', this.question);
        });
    });
  }

}
