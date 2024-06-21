import { db } from "@/db";
import { users } from "@/db/schema";
import { cookies } from "next/headers";
import React from "react";

const Home = async () => {
  const token = cookies().get("token");
  const allUsers = await db.select().from(users);
  return <div>{JSON.stringify(allUsers, null, 2)}</div>;
};

export default Home;
