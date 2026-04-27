"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n-context";

export default function LoginPage() {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? {
          username: "Benutzername",
          password: "Passwort",
          login: "Einloggen",
          invalidUser: "Unbekannter Benutzername. Erlaubt: admin oder funda",
        }
      : {
          username: "Kullanıcı Adı",
          password: "Şifre",
          login: "Giriş Yap",
          invalidUser: "Geçersiz kullanıcı adı. Yalnızca: admin veya funda",
        };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const usernameToEmail: Record<string, string> = {
    admin: "ajans.admin.test@gmail.com",
    funda: "ajans.funda.test@gmail.com",
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalized = username.trim().toLowerCase();
    const email = usernameToEmail[normalized];
    if (!email) {
      toast.error(txt.invalidUser);
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    router.replace("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-center">Ajans Köln CRM Login</CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">{txt.username}</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{txt.password}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "..." : txt.login}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
