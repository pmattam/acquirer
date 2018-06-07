const CREATE_NEW_TARGET = 'CREATE_NEW_TARGET';
const DELETE_TARGET = 'DELETE_TARGET';
const UPDATE_TARGET = 'UPDATE_TARGET';
const LOAD_TARGETS = 'LOAD_TARGETS';

export let createNewTarget = (target_company) => ({
    type: CREATE_NEW_TARGET,
    payload: target_company
});

export let deleteTarget = (target_company) => ({
    type: DELETE_TARGET,
    payload: target_company
});

export let updateTarget = (target_company) => ({
    type: UPDATE_TARGET,
    payload: target_company
});

export let loadTargets = (target_companies) => ({
    type: LOAD_TARGETS,
    payload: target_companies
});

createNewTarget.toString = () => CREATE_NEW_TARGET;
deleteTarget.toString = () => DELETE_TARGET;
updateTarget.toString = () => UPDATE_TARGET;
loadTargets.toString = () => LOAD_TARGETS;