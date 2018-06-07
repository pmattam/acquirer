import { createNewTarget, deleteTarget, updateTarget, loadTargets } from '../Actions/index';

let createNewTargetReducer = (state, action) => ({
    ...state,
    target_companies: state.target_companies.concat(action.payload)
});

let deleteTargetReducer = (state, action) => ({
    ...state,
    target_companies: state.target_companies.filter(target => target.id !== action.payload.id)
});

let updateTargetReducer = (state, action) => ({
    ...state,
    target_companies: state.target_companies.map(target => target.id === action.payload.id ? action.payload : target)
});

let loadTargetsReducer = (state, action) => ({
    ...state,
    target_companies: action.payload
});

export let reducers = {
    [createNewTarget]: createNewTargetReducer,
    [deleteTarget]: deleteTargetReducer,
    [updateTarget]: updateTargetReducer,
    [loadTargets]: loadTargetsReducer
};