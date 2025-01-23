"use client";

import { redirect, usePathname } from "next/navigation";
import Navbar from "@/components/NavigationBar/Navbar";

export default function UserPrivateRoute({ children }: any) {
  const pathname = usePathname();

  if (pathname === "/user") {
    return children;
  }

  // if (!isAdminLoggedin) {
  //   return redirect("/admin");
  // }

  return (
    <section>
      {/* navbar */}
      <Navbar />
      <div>
        {/* main content */}
        {children}
      </div>
    </section>
  );
}
