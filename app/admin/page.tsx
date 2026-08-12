import { LockKeyhole } from "lucide-react";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-margin-mobile py-16">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-container-low">
          <LockKeyhole className="h-6 w-6 text-text-secondary" />
        </div>
        <h1 className="text-headline-md font-bold text-text-primary">Admin Dashboard</h1>
        <p className="text-body-md text-text-secondary">
          This section is coming soon. Contact submissions and admin tools will
          appear here once backend setup is complete.
        </p>
      </div>
    </main>
  );
}