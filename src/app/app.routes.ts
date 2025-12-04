import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Windows } from './pages/windows/windows';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'windows', component: Windows },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
