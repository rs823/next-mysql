import { db } from "@/db";
import { users } from "@/db/schema";
import React from "react";

const Home = async () => {
  const allUsers = await db.select().from(users);
  return <div>{JSON.stringify(allUsers, null, 2)}</div>;
};

export default Home;
