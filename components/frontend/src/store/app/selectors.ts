import type { RootState } from '../store';

function selectRole(state: RootState){
    return state.app.role
}

export {
    selectRole
};
