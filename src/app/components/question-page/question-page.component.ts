import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css'],
})
export class QuestionPageComponent implements OnInit {
  @Input() question_text: string = '';
  @Input() img_url: string = '';
  @Input() hasImage: boolean = false;
  @Input() question_number: number = 0;
  @Input() OptionA: string = '';
  @Input() OptionB: string = '';
  @Input() OptionC: string = '';
  @Input() OptionD: string = '';

  @Output() listenParentHandlerA: EventEmitter<any> = new EventEmitter();
  @Output() listenParentHandlerB: EventEmitter<any> = new EventEmitter();
  @Output() listenParentHandlerC: EventEmitter<any> = new EventEmitter();
  @Output() listenParentHandlerD: EventEmitter<any> = new EventEmitter();

  clickOnOptionA() {
    this.listenParentHandlerA.emit();
  }
  clickOnOptionB() {
    this.listenParentHandlerB.emit();
  }
  clickOnOptionC() {
    this.listenParentHandlerC.emit();
  }
  clickOnOptionD() {
    this.listenParentHandlerD.emit();
  }

  constructor() {}

  ngOnInit():void {}

}
