import Link from "next/link";
import React from "react";

const second = () => {
  return (
    <div>
      <h2>This is second page.</h2>
      <Link href="/">Back To Home Page</Link>
    </div>
  );
};

export default second;
