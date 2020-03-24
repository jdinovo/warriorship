import { Component, OnInit } from '@angular/core';
import {Warrior} from '../warrior-helper';
import {WARRIORS} from '../warriorsDb';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  warriors: Warrior[] = WARRIORS;

  constructor() { }

  ngOnInit(): void { }

}
