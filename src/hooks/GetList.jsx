import React from "react";
import { useApi } from "./useFirestore";

const GetList = (url) => {
  const { error, loadins, data } = useApi(url);
  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "General error"}</p>;
    case apiStates.SUCCESS:
      return (
        <React.Fragment>
          <p>Data:</p>
          {/* <ul>
              {data.map((element) => (
                <li>{element.title}</li>
              ))}
            </ul> */}
        </React.Fragment>
      );
    case apiStates.LOADING:
      return <p>Loading...</p>;
    default:
      return <p>En blanco..</p>;
  }
};

export default GetList;
