export interface State {
  date: Date;
}

const initialState: State = {
  date: new Date()
};

export const clock = (state = initialState) => {
  return state;
};

export interface AppState {
  clock: State;
}

export const reducers = {
  clock: clock,
};
