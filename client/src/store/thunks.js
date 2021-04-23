import axios from 'axios';

export const Login = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URI}/auth/login`,
        user
      );
      if (!data.success) {
        console.error(data);
        dispatch({
          type: 'SET_ERROR',
          payload: { code: 'A_PLD_0', message: 'Something went wrong' },
        });
      } else {
        dispatch({ type: 'LOG_IN', payload: data.payload });
      }
      console.log(data);
    } catch (e) {
      if (e.response?.status === 403) {
        dispatch({
          type: 'SET_ERROR',
          payload: { code: 'AUTH', message: 'Wrong email/password' },
        });
      } else {
        console.log(e);
        dispatch({
          type: 'SET_ERROR',
          payload: { code: 'A_PLD_1', message: 'Something went wrong' },
        });
      }
    }
  };
};

export const LoadTable = (siteName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_URI}/api?siteName=${siteName}`
      );
      if (!data.success) {
        console.error(data);
        dispatch({
          type: 'SET_ERROR',
          payload: { code: 'D_PLD_0', message: 'Something went wrong' },
        });
      } else {
        dispatch({ type: 'LOAD_TABLE', payload: data.payload });
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      dispatch({
        type: 'SET_ERROR',
        payload: { code: 'D_PLD_1', message: 'Something went wrong' },
      });
    }
  };
};
