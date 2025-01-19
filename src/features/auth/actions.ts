"use server";

<<<<<<< HEAD
import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
import { AUTH_COOKIE } from "./constants";
=======
import { AUTH_COOKIE } from "@/features/auth/constants";
import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
>>>>>>> 70fd2d340620b23e2cb77da8f720272febad8927

export const getCurrentUser = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = (await cookies()).get(AUTH_COOKIE);

    if (!session) return null;

    client.setSession(session.value);
    const account = new Account(client);

    return await account.get();
  } catch {
    return null;
  }
};
