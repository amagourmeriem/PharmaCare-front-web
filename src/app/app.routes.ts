import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importer le composant Login
import { DashboardComponent } from './dashboard/dashboard.component'; // Importer le composant Dashboard

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route pour la page de connexion
  { path: 'dashboard', component: DashboardComponent }, // Route pour le tableau de bord
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut vers /login
  { path: '**', redirectTo: '/dashboard' }, // Redirection catch-all vers /dashboard
];

