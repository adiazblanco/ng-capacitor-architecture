import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from 'src/environments/environment';
import {messageReducer} from './message.reducer';

// tslint:disable-next-line: no-empty-interface
export interface State {

}

export const reducers: ActionReducerMap<State> = {
  message: messageReducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
