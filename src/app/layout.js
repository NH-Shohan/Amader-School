"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { links } from "@/lib/sildeLinks";
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    alert("Hoise Hoise");
  };

  return (
    <html lang="en">
      <body className={`h-screen antialiased`}>
        <Sidebar className="" open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-5 bg-neutral-50">
            <div className="flex flex-col overflow-y-auto overflow-x-hidden">
              <>
                <Logo />
              </>
              <div className="mt-8 flex flex-col gap-1">
                {links.map((link, idx) => (
                  <SidebarLink
                    key={idx}
                    link={link}
                    // active={pathname.startsWith(link.href)}
                  />
                ))}
              </div>
            </div>

            <div className="">
              <SidebarLink
                className="hover:bg-red-500/10 hover:text-red-500"
                onClick={handleLogout}
                link={{
                  label: "Log Out",
                  href: "/admin",
                  Icon: <SignOut className="w-6 h-6" />,
                }}
                logout
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="w-full h-screen">{children}</div>
      </body>
    </html>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 ml-1 relative z-20 w-fit"
    >
      <div className="h-10 w-10 bg-blue-500 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-blue-500 text-2xl dark:text-white whitespace-pre"
      >
        Amader School
      </motion.span>
    </Link>
  );
};
