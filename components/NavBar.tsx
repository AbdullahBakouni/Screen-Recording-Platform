"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const user = {};
const NavBar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            width={32}
            height={32}
            alt="Logo"
          />
          <h1>Snap Cast</h1>
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/123")}>
              <Image
                src="/assets/images/dummy.jpg"
                alt="user"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
             <button
              onClick={async () => {
                return await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
              className="cursor-pointer"
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="LogOut"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
