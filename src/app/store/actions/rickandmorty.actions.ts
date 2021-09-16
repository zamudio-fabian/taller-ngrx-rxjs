import { createAction, props } from "@ngrx/store";

export const GetAll = createAction('[RICKANDMORTY_ACTION] GetAll');
export const GetAllSuccess = createAction('[RICKANDMORTY_ACTION] GetAllSuccess', props<{data: any}>());
export const Find = createAction('[RICKANDMORTY_ACTION] Find', props<{id: number}>());
export const FindSuccess = createAction('[RICKANDMORTY_ACTION] FindSuccess', props<{data: any}>());