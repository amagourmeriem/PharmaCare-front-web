import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Importer le composant

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Définir la route pour le login
  // Ajoutez ici d'autres routes si nécessaire
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // 
];
