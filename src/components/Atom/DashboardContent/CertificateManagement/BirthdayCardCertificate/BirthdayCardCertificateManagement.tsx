"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import * as XLSX from "xlsx";
import InfoItem from "@/components/Atom/InfoItem/InfoItem";
import { fetchAllCertificates } from "@/actions/getAllCertificates";

type BirthdayCardCertificateType = {
  id: number;
  email: string;
  certificate_type: "birthday_cards" | string;
  recipient_first_name: string;
  recipient_last_name: string;
  recipient_address?: string;
  recipient_postal_code: string;
  recipient_birthday: string;
  is_for_self: "this card is for my birthday" | "this card is for someone else";
};

const BirthdayCardCertificateManagement = () => {
  const [certificates, setCertificates] = useState<BirthdayCardCertificateType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const savedToken = Cookies.get("auth_token");

  useEffect(() => {
    const fetchCertificates = async () => {
      setLoading(true);
      try {
        const data = await fetchAllCertificates(savedToken!, "birthday_cards");
        setCertificates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    if (savedToken) {
      fetchCertificates();
    } else {
      setError("Authentication token not found.");
      setLoading(false);
    }
  }, [savedToken]);

  const deleteCertificate = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/certificates/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Error deleting certificate.");
      setCertificates(certificates.filter((cert) => cert.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    }
  };

  const exportCSV = () => {
    if (certificates.length === 0) return;
    const header = [
      "ID",
      "Email",
      "Recipient First Name",
      "Recipient Last Name",
      "Recipient Address",
      "Postal Code",
      "Recipient Birthday",
      "Is For Self",
    ];
    const csvRows = certificates.map((cert) => [
      cert.id,
      cert.email,
      cert.recipient_first_name,
      cert.recipient_last_name,
      cert.recipient_address || "",
      cert.recipient_postal_code,
      cert.recipient_birthday,
      cert.is_for_self,
    ]);

    const csvContent = [
      header.join(","),
      ...csvRows.map((row) => row.map((item) => `"${item}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "certificates.csv";
    link.click();
  };

  const exportExcel = () => {
    if (certificates.length === 0) return;
    const worksheetData = certificates.map((cert) => ({
      ID: cert.id,
      Email: cert.email,
      "Recipient First Name": cert.recipient_first_name,
      "Recipient Last Name": cert.recipient_last_name,
      "Recipient Address": cert.recipient_address || "",
      "Postal Code": cert.recipient_postal_code,
      "Recipient Birthday": cert.recipient_birthday,
      "Is For Self": cert.is_for_self,
    }));
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Certificates");
    XLSX.writeFile(workbook, "certificates.xlsx");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <section className="w-full lg:w-[90%] xl:w-[75%] px-4 py-8 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
        Birthday Card Certificates
      </h1>

      <div className="flex flex-col md:flex-row justify-end gap-2 mb-4">
        <button
          onClick={exportCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Export CSV
        </button>
        <button
          onClick={exportExcel}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Export Excel
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "ID",
                "Email",
                "Recipient First Name",
                "Recipient Last Name",
                "Recipient Address",
                "Postal Code",
                "Recipient Birthday",
                "Is For Self",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {certificates.map((cert) => (
              <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-2 py-3 text-sm text-gray-700 text-center">{cert.id}</td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">{cert.email}</td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">
                  {cert.recipient_first_name}
                </td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">
                  {cert.recipient_last_name}
                </td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">
                  {cert.recipient_address || "-"}
                </td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">
                  {cert.recipient_postal_code}
                </td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">
                  {cert.recipient_birthday ? new Date(cert.recipient_birthday).toLocaleDateString() : "-"}
                </td>
                <td className="px-2 py-3 text-sm text-gray-700 text-center">
                  {cert.is_for_self}
                </td>
                <td className="px-2 py-3 text-sm text-center">
                  <button
                    className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 transition-colors"
                    onClick={() => deleteCertificate(cert.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <InfoItem label="ID" value={cert.id.toString()} />
              <InfoItem label="Email" value={cert.email} />
              <InfoItem label="Recipient First Name" value={cert.recipient_first_name} />
              <InfoItem label="Recipient Last Name" value={cert.recipient_last_name} />
              <InfoItem label="Address" value={cert.recipient_address || "-"} />
              <InfoItem label="Postal Code" value={cert.recipient_postal_code} />
              <InfoItem
                label="Recipient Birthday"
                value={
                  cert.recipient_birthday
                    ? new Date(cert.recipient_birthday).toLocaleDateString()
                    : "-"
                }
              />
              <InfoItem label="Is For Self" value={cert.is_for_self} />
              <div className="col-span-2">
                <button
                  className="w-full bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-200 transition-colors"
                  onClick={() => deleteCertificate(cert.id)}
                >
                  Delete Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {certificates.length === 0 && !loading && (
        <div className="mt-8 text-center text-gray-500">No records found.</div>
      )}
    </section>
  );
};

export default BirthdayCardCertificateManagement;
