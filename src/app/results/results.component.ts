import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WARRIORS} from '../warriorsDb';
import {Warrior} from '../warrior-helper';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  result: number;
  warrior: Warrior;
  warriors: Warrior[] = WARRIORS;

  constructor( private router: Router) { }

  ngOnInit() {
    this.result = history.state.winner;

    if (this.result === undefined) {
      this.router.navigate(['/']);
    } else {
      this.warrior = this.warriors[this.result];
    }
  }

}
