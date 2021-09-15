import { createAction, props } from "@ngrx/store";
import { Character } from "../../models/character.model";

export const createCharacter = createAction('[CHARACTER_ACTION] createCharacter', props<{character: Character}>());
export const deleteCharacter = createAction('[CHARACTER_ACTION] deleteCharacter', props<{id: string}>());
export const reset = createAction('[CHARACTER_ACTION] reset');