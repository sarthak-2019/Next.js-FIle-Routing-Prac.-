import React from "react";
import { useRouter } from "next/router";
const ClientsProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  const clickHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={clickHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;
