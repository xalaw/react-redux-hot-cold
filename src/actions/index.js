export const ADD_GUESS = 'ADD_GUESS';
export const SET_NEW_GAME = 'SET_NEW_GAME';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});


export const setNewGame = () => ({
    type: SET_NEW_GAME,
    
});

export const toggleModal = showBoolean => ({
    type: TOGGLE_MODAL,
    showBoolean
});
