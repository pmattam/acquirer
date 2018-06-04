const CREATE_NEW_TARGET = 'CREATE_NEW_TARGET';

export let createNewTarget = (target_company) => ({
    type: CREATE_NEW_TARGET,
    payload: target_company
});
createNewTarget.toString = () => CREATE_NEW_TARGET;