import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const UserPage = (props: Props) => {
  return <div>This is the user{props.params.id} details page</div>;
};

export default UserPage;
