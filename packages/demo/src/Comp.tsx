import * as React from "react";
import gql from "graphql-tag";
import { useReduxQuery } from "redux-graphql";
import { ReduxGQLQuery } from "./__generated__/reduxGQL";

const COMP_QUERY = gql`
  {
    redux {
      name
      nested {
        flag
      }
    }
  }
`;

console.log('COMP_QUERY', COMP_QUERY);

export const Comp = () => {
  const { data } = useReduxQuery<ReduxGQLQuery>(COMP_QUERY);

  console.log("render", { data });

  return <h1>name: {data && data.redux && data.redux.name}</h1>;
};
