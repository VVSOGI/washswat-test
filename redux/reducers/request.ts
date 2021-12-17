const initialState = {
  currentRequest: null,
};

export const request = (
  state = initialState,
  action: { currentRequest: object | null }
) => {
  return {
    ...state,
    currentRequest: action.currentRequest,
  };
};
