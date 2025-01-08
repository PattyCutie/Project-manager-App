"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-end">
            <Image
              src="/vibedose.svg"
              height={60}
              width={60}
              alt="vibedose-logo"
            />
            <h1 className="font-extrabold text-2xl text-[#0E7EA4]">
              Vibe Dose
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="secondary">
              <Link href={isSignIn ? "sign-up" : "sign-in"}>
                {pathname === "/sign-in" ? "Sign Up" : "Sign In"}
              </Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
