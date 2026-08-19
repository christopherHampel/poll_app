import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-survey-form',
  imports: [],
  templateUrl: './new-survey-form.html',
  styleUrl: './new-survey-form.scss',
})
export class NewSurveyForm {
  categories: string[] = [
    'All Surveys',
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation',
  ];

  private readonly datePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;

  surveyBasicsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyBasicsForm = this.fb.group({
      surveyName: ['', Validators.required],
      setEndDate: ['', Validators.pattern(this.datePattern)],
      chooseCategory: ['', Validators.required],
    });
  }

  clearField(controlName: string): void {    
    this.surveyBasicsForm.get(controlName)?.setValue('');
  }
}
