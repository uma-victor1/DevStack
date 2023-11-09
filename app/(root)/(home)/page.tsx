import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      Home Page
      <UserButton afterSignOutUrl="/" signInUrl="/ask-question"></UserButton>
    </div>
  );
};

export default page;
