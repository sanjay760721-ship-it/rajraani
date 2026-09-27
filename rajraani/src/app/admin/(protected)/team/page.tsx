import { TeamManager, type TeamMember } from "@/components/admin/TeamManager";
import { requireAdmin } from "@/lib/auth/session";
import { db } from "@/lib/db/client";

export const metadata = { title: "Team" };

export default async function AdminTeamRoute() {
  const me = await requireAdmin();
  const rows = db()
    .prepare("SELECT id, email, created_at, last_login_at FROM admin_user ORDER BY created_at")
    .all() as unknown as { id: number; email: string; created_at: string; last_login_at: string | null }[];
  const members: TeamMember[] = rows.map((row) => ({
    id: row.id,
    email: row.email,
    createdAt: row.created_at,
    lastLoginAt: row.last_login_at,
    isMe: row.id === me.id,
  }));
  // id 0 is the developer sign-in (auth/session.ts), which has no account row.
  return <TeamManager members={members} devSignIn={me.id === 0} />;
}
