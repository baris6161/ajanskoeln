"use client";

import Link from "next/link";
import { LayoutDashboard, Users, FileText, PlusCircle, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/dashboard", icon: LayoutDashboard, key: "dashboard" as const },
  { href: "/customers", icon: Users, key: "customers" as const },
  { href: "/offers", icon: FileText, key: "offers" as const },
  { href: "/offers/new", icon: PlusCircle, key: "new" as const },
  { href: "/settings", icon: Settings, key: "settings" as const },
];

type Props = {
  collapsed?: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
  onToggle?: () => void;
};

export function Sidebar({ collapsed = false, mobile = false, onNavigate, onToggle }: Props) {
  const pathname = usePathname();
  const { tx } = useI18n();
  const hasExactMatch = links.some((link) => link.href === pathname);

  const isActive = (href: string) => {
    if (hasExactMatch) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside
      className={cn(
        "relative border-border bg-sidebar",
        mobile
          ? "h-full w-full p-4"
          : "hidden shrink-0 border-r p-4 transition-all duration-300 md:flex md:flex-col",
        !mobile && (collapsed ? "w-[88px]" : "w-[250px]"),
      )}
    >
      <div className={cn("mb-8 rounded-2xl bg-primary/10 p-4", collapsed && !mobile && "px-2 text-center")}>
        <p className="text-xl font-semibold text-primary">{collapsed && !mobile ? "AK" : "Ajans Köln"}</p>
        {!collapsed || mobile ? <p className="text-sm text-muted-foreground">Fair Organisation</p> : null}
      </div>
      <nav className="flex flex-col gap-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center rounded-xl px-4 py-3 text-sm transition-colors",
              collapsed && !mobile ? "justify-center px-2" : "gap-3",
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary",
            )}
          >
            <item.icon className="h-4 w-4" />
            {!collapsed || mobile ? tx.nav[item.key] : null}
          </Link>
        ))}
      </nav>
      {!mobile ? (
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="absolute top-1/2 -right-4 hidden -translate-y-1/2 rounded-full border-border bg-background shadow-sm md:inline-flex"
          onClick={onToggle}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      ) : null}
    </aside>
  );
}
