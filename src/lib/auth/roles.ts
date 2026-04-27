export type UserRole = "admin" | "owner";

export function canEditSettings(role: UserRole) {
  return role === "admin";
}
