import React from "react";
import { useRouter } from "next/router";
const SelectedClientsProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>The Projects for a Specific Project for a Selected Client</div>;
};

export default SelectedClientsProjectPage;
