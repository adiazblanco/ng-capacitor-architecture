import {Action, createReducer, on, State} from '@ngrx/store';
import {add} from '../actions/message.actions';

export const initialState: any = {text: 'Ready to create an app?'};

const _messageReducer: any = createReducer(initialState,
  // tslint:disable-next-line: typedef
  on(add, (_state: any, {message}: any) => message),
);

export function messageReducer(state: State<any> | undefined, action: Action): any {
  return _messageReducer(state, action);
}
