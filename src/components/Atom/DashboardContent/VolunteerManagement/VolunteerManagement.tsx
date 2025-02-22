"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchAllVolunteer } from "@/actions/getAllVolunteer";
import * as XLSX from "xlsx";

type Volunteer = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  postal_code: string;
  created_at: string;
};

const VolunteerManagement = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const savedToken = Cookies.get("auth_token");

  useEffect(() => {
    const getVolunteers = async () => {
      try {
        const data = await fetchAllVolunteer(savedToken!);
        setVolunteers(data);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      } finally {
        setLoading(false);
      }
    };
    getVolunteers();
  }, [savedToken]);

  const filteredVolunteers = volunteers.filter(
    (volunteer) =>
      volunteer.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = () => {
    const header = ["ID", "First Name", "Last Name", "Email", "Phone", "Postal Code", "Created At"];
    const csvRows = [header.join(",")];

    filteredVolunteers.forEach((volunteer) => {
      const row = [
        volunteer.id.toString(),
        `"${volunteer.first_name}"`,
        `"${volunteer.last_name}"`,
        `"${volunteer.email}"`,
        `"${volunteer.phone_number}"`,
        `"${volunteer.postal_code}"`,
        `"${new Date(volunteer.created_at).toLocaleDateString("en-US")}"`
      ];
      csvRows.push(row.join(","));
    });
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "volunteers.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    const wsData = [
      ["ID", "First Name", "Last Name", "Email", "Phone", "Postal Code", "Created At"]
    ];
    filteredVolunteers.forEach((volunteer) => {
      wsData.push([
        volunteer.id.toString(),
        volunteer.first_name,
        volunteer.last_name,
        volunteer.email,
        volunteer.phone_number,
        volunteer.postal_code,
        new Date(volunteer.created_at).toLocaleDateString("en-US")
      ]);
    });
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Volunteers");
    XLSX.writeFile(wb, "volunteers.xlsx");
  };

  return (
    <section className="w-full">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Volunteer Management
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
                      Phone
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
                  {filteredVolunteers.map((volunteer) => (
                    <tr key={volunteer.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {volunteer.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {volunteer.first_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {volunteer.last_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {volunteer.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {volunteer.phone_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {volunteer.postal_code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 break-words">
                        {new Date(volunteer.created_at).toLocaleDateString("en-US")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredVolunteers.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  No volunteers found.
                </p>
              )}
            </div>
            {/* Mobile Card View */}
            <div className="space-y-4 md:hidden">
              {filteredVolunteers.map((volunteer) => (
                <div key={volunteer.id} className="bg-gray-50 p-4 rounded shadow">
                  <p className="break-words">
                    <span className="font-semibold">ID:</span> {volunteer.id}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Name:</span> {volunteer.first_name}{" "}
                    {volunteer.last_name}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Email:</span> {volunteer.email}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Phone:</span> {volunteer.phone_number}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Postal Code:</span> {volunteer.postal_code}
                  </p>
                  <p className="break-words">
                    <span className="font-semibold">Created At:</span>{" "}
                    {new Date(volunteer.created_at).toLocaleDateString("en-US")}
                  </p>
                </div>
              ))}
              {filteredVolunteers.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  No volunteers found.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VolunteerManagement;
