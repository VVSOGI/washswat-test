export const LOAD_REQUEST_DATA = "LOAD_REQUEST_DATA";
import axios from "axios";
import { Dispatch } from "react";

export const fetchData = () => {
  return async (dispatch: Dispatch<object>) => {
    const request = await axios.get("http://localhost:3000/request");
    const data = request.data[0];

    if (request) {
      dispatch({ type: LOAD_REQUEST_DATA, currentRequest: data });
    } else {
      console.log("No data");
    }
  };
};
