import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";

const SignUpPage = async () => {
  const user = await getCurrentUser();

  if (user) redirect("/");

  return (
    <div>
      <SignUpCard />
    </div>
  );
};

export default SignUpPage;
