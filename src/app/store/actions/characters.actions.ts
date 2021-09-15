import { createAction, props } from "@ngrx/store";
import { Character } from "../../models/character.model";

export const CreateCharacter = createAction('[CHARACTER_ACTION] CreateCharacter', props<{character: Character}>());
export const DeleteCharacter = createAction('[CHARACTER_ACTION] DeleteCharacter', props<{id: string}>());
export const Reset = createAction('[CHARACTER_ACTION] Reset');