import { LockKeyhole } from "lucide-react";
import { adminDb } from "@/lib/firebase/admin";
import LogoutButton from "./logoutbutton/logoutbutton";
import SubmissionTable from "./SubmissionTable";

export const dynamic = "force-dynamic";

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

async function getSubmissions(): Promise<Submission[]> {
  const snapshot = await adminDb
    .collection("contact_submissions")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name ?? "",
      email: data.email ?? "",
      subject: data.subject ?? "",
      message: data.message ?? "",
      createdAt: data.createdAt?.toDate().toLocaleDateString() ?? "",
    };
  });
}

export default async function AdminPage() {
  const submissions = await getSubmissions();

  return (
    <main className="min-h-screen bg-background px-margin-mobile py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low">
              <LockKeyhole className="h-5 w-5 text-text-secondary" />
            </div>

            <h1 className="text-headline-md font-bold text-text-primary">
              Contact Submissions
            </h1>
          </div>

          <LogoutButton />
        </div>

        {/* Search + Filter + Table */}
        <SubmissionTable submissions={submissions} />

      </div>
    </main>
  );
}