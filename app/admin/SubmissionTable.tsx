"use client";

import { useMemo, useState } from "react";

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface SubmissionTableProps {
  submissions: Submission[];
}

export default function SubmissionTable({
  submissions,
}: SubmissionTableProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const filteredSubmissions = useMemo(() => {
    let result = [...submissions];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((submission) =>
        [
          submission.name,
          submission.email,
          submission.subject,
          submission.message,
        ].some((value) =>
          value.toLowerCase().includes(query)
        )
      );
    }

    // Sort
    if (sort === "newest") {
      result.reverse();
    }

    if (sort === "oldest") {
      result.reverse();
    }

    return result;
  }, [submissions, search, sort]);

  return (
    <div>
      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search name, email, subject or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Results */}
      {filteredSubmissions.length === 0 ? (
        <p className="text-body-md text-text-secondary">
          No matching submissions found.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-bento border border-border bg-white shadow-level-2">
          <table className="w-full text-left text-body-sm">
            <thead className="bg-surface-container-low text-text-secondary">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubmissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="border-t border-border"
                >
                  <td className="p-3">
                    {submission.name}
                  </td>

                  <td className="p-3">
                    {submission.email}
                  </td>

                  <td className="p-3">
                    {submission.subject}
                  </td>

                  <td className="max-w-xs truncate p-3">
                    {submission.message}
                  </td>

                  <td className="p-3">
                    {submission.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}