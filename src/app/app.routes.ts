import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NewSurvey } from './home/new-survey/new-survey';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'new-survey',
    component: NewSurvey,
  },
];
