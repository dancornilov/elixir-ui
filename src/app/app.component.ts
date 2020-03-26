import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msgs = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    this.fetchData();
  }

  public fetchData(): void {
    this.httpClient.get('http://127.0.0.1:8000').subscribe(response => console.log(response));
  }
}
