import { UserButton } from "@/features/auth/components/user-button";
import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  //if home page is for login user
  const user = await getCurrentUser();

  console.log(user);
  if (!user) redirect("/sign-in");

  return (
    <div>
      <UserButton />
    </div>
  );
}
