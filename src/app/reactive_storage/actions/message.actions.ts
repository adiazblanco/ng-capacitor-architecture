import {createAction, props} from '@ngrx/store';

export const add: any = createAction(
    '[Message] New State',
    props<{message: any}>()
);
