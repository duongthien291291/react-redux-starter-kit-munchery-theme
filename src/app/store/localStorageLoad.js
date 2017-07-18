import data from '../../../data.json'
import { updateUsers, updatePhase1Questions, updatePhase2Questions, initialState } from '../containers/AppReducer'

export default store => next => action => {
  const { type } = action;
  if (type === 'INIT') {
    try {
      let storedState = JSON.parse(
        localStorage.getItem('game')
      );
      if (!storedState) {
        storedState = initialState;
      }

      if(!storedState.users || storedState.users.length == 0){
        storedState = {...storedState, users: data.users};
      }

      if(!storedState.phase1Questions || storedState.phase1Questions.length == 0){
        storedState = {...storedState, phase1Questions: data.phase1Questions};
      }

      if(!storedState.phase2Questions || storedState.phase2Questions.length == 0){
        storedState = {...storedState, phase2Questions: data.phase2Questions};
      }

      if(!storedState.phase2Answers || storedState.phase2Answers.length == 0){
        storedState = {...storedState, phase2Answers: initialState.phase2Answers};
      }

      store.dispatch({
        type: 'RESET_APP_STATE',
        payload: storedState
      });

      return;
    } catch (e) {
      alert('Unable to load or parse stored state, proceed as usual');
      // Unable to load or parse stored state, proceed as usual
    }
  }

  next(action);
}
