import { Component } from '@angular/core';
import { NewSurveyForm } from "./new-survey-form/new-survey-form";

@Component({
  selector: 'app-new-survey',
  imports: [NewSurveyForm],
  templateUrl: './new-survey.html',
  styleUrl: './new-survey.scss',
})
export class NewSurvey {

}
