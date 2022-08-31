import React from "react";
import { useFirestore, apiStates } from "./useFirestore";

const PostList = () => {
  const { state, error, data } = useFirestore("urls");

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "Error General"}</p>;
    case apiStates.SUCCESS:
      return (
        <ul>
          {React.Children.toArray(
            data.map((element) => (
              <>
                <li key={element.nanoid}>{element.origin}</li>
              </>
            ))
          )}
        </ul>
      );
    default:
      return <p>Loading...</p>;
  }
};

export default PostList;
