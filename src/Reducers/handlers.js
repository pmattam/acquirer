import { createNewTarget } from '../Actions/index';

let createNewTargetReducer = (state, action) => ({
  ...state, target_companies: state.target_companies.concat(action.payload)
});

export let reducers = {
  [createNewTarget]: createNewTargetReducer
};