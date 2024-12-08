import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
})
export class DashboardComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
              {
                label: 'Patients',
                data: [30, 50, 80, 40],
                backgroundColor: ['#4CAF50', '#FF9800', '#2196F3', '#F44336'],
              },
            ],
          },
          options: {
            responsive: true,
          },
        });
      } else {
        console.error('Canvas element not found!');
      }
    }
  }
}
