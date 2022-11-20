import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scorepage',
  templateUrl: './scorepage.component.html',
  styleUrls: ['./scorepage.component.css'],
})
export class ScorepageComponent implements OnInit {

  @Input() score: number = 0;
  username: string = '';
  isPoor: boolean = false;
  isAverage: boolean = false;
  isExcellent: boolean = false;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.currentUser.subscribe(
      (username) => (this.username = username)
    );

    if (this.score >= 0 && this.score < 4) {
      this.isPoor = true;
    } else if (this.score >= 5 && this.score < 8) {
      this.isAverage = true;
    } else {
      this.isExcellent = true;
    };    
  }

  resetQuiz() {
    this.router.navigateByUrl('welcome');
  }
}