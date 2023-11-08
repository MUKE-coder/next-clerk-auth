import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

export default async function page() {
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId } = auth();

  if (userId) {
    console.log(userId);
  }

  // Get the User object when you need access to the user's information
  const user = await currentUser();
  console.log(user);
  // Use `user` to render user details or create UI elements
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6">
      <h2 className="text-3xl">Dashboard Page</h2>
      <p>User Id : {userId}</p>
      <h2>User Details</h2>
      <p>First Name : {user.firstName}</p>
      <p>Last Name : {user.lastName}</p>
    </div>
  );
}
