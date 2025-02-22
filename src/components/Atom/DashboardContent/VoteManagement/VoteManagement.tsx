"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchAllVote } from "@/actions/getAllVote";
import * as XLSX from "xlsx";

type vote = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  postal_code: string;
  created_at: string;
};

const VoteManagement = () => {
  const [votes, setvotes] = useState<vote[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const savedToken = Cookies.get("auth_token");

  useEffect(() => {
    const getvotes = async () => {
      try {
        const data = await fetchAllVote(savedToken!);
        setvotes(data);
      } catch (error) {
        console.error("Error fetching votes:", error);
      } finally {
        setLoading(false);
      }
    };
    getvotes();
  }, [savedToken]);

  const filteredvotes = votes.filter(
    (vote) =>
      vote.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vote.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vote.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = () => {
    const header = ["ID", "First Name", "Last Name", "Email", "Postal Code", "Created At"];
    const csvRows = [header.join(",")];

    filteredvotes.forEach((vote) => {
      const row = [
        vote.id.toString(),
        `"${vote.first_name}"`,
        `"${vote.last_name}"`,
        `"${vote.email}"`,
        `"${vote.postal_code}"`,
        `"${new Date(vote.created_at).toLocaleDateString("en-US")}"`
      ];
      csvRows.push(row.join(","));
    });
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "votes.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    const wsData = [
      ["ID", "First Name", "Last Name", "Email", "Postal Code", "Created At"]
    ];
    filteredvotes.forEach((vote) => {
      wsData.push([
        vote.id.toString(),
        vote.first_name,
        vote.last_name,
        vote.email,
        vote.postal_code,
        new Date(vote.created_at).toLocaleDateString("en-US")
      ]);
    });
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "votes");
    XLSX.writeFile(wb, "votes.xlsx");
  };

  return (
    <section className="w-full">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Votes Management
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 space-y-2 md:space-y-0">
          <input
            type="text"
            placeholder="Search by first name, last name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full mx-2 md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex space-x-2">
            <button
              onClick={exportToCSV}
              className="text-white bg-blue-500 px-2 py-2 rounded hover:bg-blue-600"
            >
              Export CSV
            </button>
            <button
              onClick={exportToExcel}
              className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600"
            >
              Export Excel
            </button>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="overflow-x-auto hidden md:block">
              <table className="divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-words">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-words">
                      First Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-words">
                      Last Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-words">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-words">
                      Postal Code
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-words">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredvotes.map((vote) => (
                    <tr key={vote.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {vote.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {vote.first_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {vote.last_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {vote.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {vote.postal_code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {new Date(vote.created_at).toLocaleDateString("en-US")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredvotes.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  No votes found.
                </p>
              )}
            </div>
            {/* Mobile Card View */}
            <div className="space-y-4 md:hidden">
              {filteredvotes.map((vote) => (
                <div key={vote.id} className="bg-gray-50 p-4 rounded shadow">
                  <p className="break-words">
                    <span className="font-semibold">ID:</span> {vote.id}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Name:</span> {vote.first_name}{" "}
                    {vote.last_name}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Email:</span> {vote.email}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Postal Code:</span> {vote.postal_code}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Created At:</span>{" "}
                    {new Date(vote.created_at).toLocaleDateString("en-US")}
                  </p>
                </div>
              ))}
              {filteredvotes.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  No votes found.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VoteManagement;
