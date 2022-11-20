import { Component } from '@angular/core';
import questions from '../../../assets/questions.json';

// Interfaces

export interface SingleQuestion {
  id: number;
  questionText: string;
  image?: string;
  hasImage: boolean;
  answerOptions: AnswerOption[];
}

export interface AnswerOption {
  value: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-startgame',
  templateUrl: './startgame.component.html',
  styleUrls: ['./startgame.component.css']
})

export class StartgameComponent {
  // questions: SingleQuestion[] = questions.sort(() => Math.random() - 0.5).slice(0,10);
  shuffleQuestions: SingleQuestion[] = questions.slice(0, 10);
  questionIndexNumber: number = 0;
  currentQuestion: SingleQuestion = questions[this.questionIndexNumber];
  quizEnded: boolean = false;
  score: number = 0;
  idQuestion: number = 0;
  
  // Below method checks if the Quiz has ended or not

  checkQuizEndedOrNot() {
    // Quiz ended
    if (this.questionIndexNumber >= this.shuffleQuestions.length) {
      this.quizEnded = true;
    }
  }

  // It checks if the answer is correct or not and moves to the next question
  handleClickOption(option: AnswerOption) { 
    if (this.questionIndexNumber <= this.shuffleQuestions.length) {
      if (option.isCorrect === true) {
        this.score = this.score + 1;
      }                      
      this.idQuestion++;
      this.questionIndexNumber = this.questionIndexNumber + 1;
      this.currentQuestion = this.shuffleQuestions[this.questionIndexNumber];      
    };
    //  Checks if the end question has reached or not
    this.checkQuizEndedOrNot(); 
  }
}
