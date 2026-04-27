"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, PlusCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";

const links = [
  { href: "/dashboard", icon: LayoutDashboard, key: "dashboard" as const },
  { href: "/customers", icon: Users, key: "customers" as const },
  { href: "/offers", icon: FileText, key: "offers" as const },
  { href: "/offers/new", icon: PlusCircle, key: "new" as const },
  { href: "/settings", icon: Settings, key: "settings" as const },
];

export function BottomNav() {
  const pathname = usePathname();
  const { tx } = useI18n();
  const hasExactMatch = links.some((link) => link.href === pathname);

  const isActive = (href: string) => {
    if (hasExactMatch) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-border bg-card md:hidden">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex flex-col items-center justify-center gap-1 px-2 py-2 text-[11px]",
            isActive(item.href) ? "text-primary" : "text-muted-foreground",
          )}
        >
          <item.icon className="h-4 w-4" />
          <span>{tx.nav[item.key]}</span>
        </Link>
      ))}
    </nav>
  );
}
