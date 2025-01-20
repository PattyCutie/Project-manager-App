import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  //if home page is for login user
  const user = await getCurrentUser();

  console.log(user);
  if (!user) redirect("/sign-in");

  return (
    <div>
     This is Dashboard page
    </div>
  );
}
