import React from "react";

const ShowData = ({ serverData }: any) => {
  return <div>Ashish: {serverData.map((value: any) => value.title)}</div>;
};

export default ShowData;
