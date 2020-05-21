import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {add} from 'src/app/reactive_storage/actions/message.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: Observable<any>;

  constructor(private readonly store: Store<{message: any}>) {
    this.message = this.getMessage();
  }

  setMessage(): void {
    this.store.dispatch(add({message: {text: 'Ready to create an reactive app?'}}));
  }

  private getMessage(): Observable<any> {
    return this.store.pipe(select('message'));
  }
}
