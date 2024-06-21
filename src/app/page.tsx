import { db } from "@/db";
import { users } from "@/db/schema";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";
import React from "react";

export const revalidate = 60;
export const dynamic = "force-dynamic";

const getAllUsers = async () => {
  const token = cookies().get("token");
  const allUsers = await db.select().from(users);
  return allUsers;
};

const cachedGetAllUsers = unstable_cache(
  async () => {
    const allUsers = await db.select().from(users);
    return allUsers;
  },
  ["get-all-users"],
  {
    tags: ["get-all-users"],
    revalidate: 60,
  }
);

const Home = async () => {
  const token = cookies().get("token");
  const allUsers = getAllUsers();
  const cachedAllUsers = await cachedGetAllUsers();
  return (
    <div>
      {JSON.stringify(allUsers, null, 2)}

      <h2 className="my-5 font-bold">Cached</h2>
      {JSON.stringify(cachedAllUsers, null, 2)}
    </div>
  );
};

export default Home;
