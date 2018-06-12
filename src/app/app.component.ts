import { Component } from '@angular/core';
import { AppState } from './reducers';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<AppState>) {
    store.pipe(select('clock')).subscribe((data) => {
      console.log(data);
    });
  }
}
