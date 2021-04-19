import React from 'react';
import { RootContext } from '../context';
import axios from 'axios';

export const useApiParserData = () => {
  const { dispatch } = React.useContext(RootContext);
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios(
          `${process.env.REACT_APP_URI}/api?siteName=knauf`
        );
        if (!data.success || !data.payload) {
          throw new Error(`Unexpected response recieved ${data}`);
        } else if (!Array.isArray(data.payload)) {
          throw new Error(
            `Unexpected payload type: ${typeof data.payload} ${data.payload}`
          );
        }
        dispatch({ type: 'LOAD_TABLE', payload: data.payload });
      } catch (e) {
        console.error(e.message);
      }
    };
    loadData();
  }, [dispatch]);
};
