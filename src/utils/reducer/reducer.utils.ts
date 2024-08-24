import { AnyAction } from "redux";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { match } from "assert";

type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>
}

withMatcher(fetchCategoriesStart)

export function withMatcher<AC extends () => AnyAction & { type: string}>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & {type: string}>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {type, match(action: AnyAction) {return action.type === type}})
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

export function createAction<T extends String, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends String, P>(type: T, payload: void): Action<T>

export function createAction<T extends String, P>(type: T, payload: P) {
    return {type, payload};
}