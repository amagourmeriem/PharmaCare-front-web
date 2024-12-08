import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Importez vos routes ici
  ],
})
export class AppModule {}
