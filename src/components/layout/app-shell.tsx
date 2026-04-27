 "use client";

import { useState } from "react";
import { BottomNav } from "@/components/navigation/bottom-nav";
import { Sidebar } from "@/components/navigation/sidebar";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <Sidebar collapsed={desktopCollapsed} onToggle={() => setDesktopCollapsed((prev) => !prev)} />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-border bg-background/85 px-4 py-4 backdrop-blur md:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="h-4 w-4" />
                </Button>
                <p className="text-lg font-semibold text-primary">Ajans Köln</p>
              </div>
              <LanguageSwitcher />
            </div>
          </header>
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 pb-24 md:px-6 md:pb-8 lg:px-8">
            {children}
          </main>
        </div>
      </div>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[86%] p-0 sm:max-w-sm">
          <Sidebar mobile onNavigate={() => setMobileMenuOpen(false)} />
        </SheetContent>
      </Sheet>
      <BottomNav />
    </div>
  );
}
