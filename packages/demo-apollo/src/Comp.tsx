import * as React from "react";
import gql from "graphql-tag";
import { useReduxGraphQuery } from "../../use-redux-graphql-apollo";
import { ReduxGQLQuery } from "./__generated__/reduxGQL";

const COMP_QUERY = gql`
  query CompQuery {
    redux @client {
      name
      nested {
        flag
      }
    }
  }
`;

export const Comp = () => {
  const { data, error } = useReduxGraphQuery<ReduxGQLQuery>(COMP_QUERY);

  console.log("render", { data, error });

  if (error) return <div>error</div>;

  return <h1>name: {data && data.redux && data.redux && data.redux.name}</h1>;
};
