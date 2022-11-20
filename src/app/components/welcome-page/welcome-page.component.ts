import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { SingleQuestion } from '../startgame/startgame.component';
import questions from '../../../assets/questions.json';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {

  shuffleQuestions: SingleQuestion[] = questions;

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl(
      '', [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    email: new FormControl(
      '', [
        Validators.required,
        Validators.email
      ]
    )
  });

  //Fisher-Yates method for the most random shuffle

  shuffleEachQuestion(array: SingleQuestion[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  loginUser() {
    this.sharedService.changeUserName(this.loginForm.value.username);
    // console.log(this.loginForm.value.username);
    this.router.navigateByUrl('quiz');
    this.shuffleEachQuestion(this.shuffleQuestions);
    // console.log(this.shuffleQuestions);
  }

}
