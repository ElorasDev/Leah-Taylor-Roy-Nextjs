"use client";
import { useState } from "react";
import BirthdayCertificate from "./BirthdayCertificate/BirthdayCertificate";
import BirthdayCardCertificate from "./BirthdayCardCertificate/BirthdayCardCertificate";
import AnniversaryCertificate from "./AnniversaryCertificate/AnniversaryCertificate";
import UniqueCertificate from "./UniqueCertificate/UniqueCertificate";

const Certificates = () => {
  const [select, setSelect] = useState("birthday");

  return (
    <section className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Certificate Request</h2>

      {/* Guidance Text Card */}
      <div className="mb-8 p-6">
        <p className="mb-4 text-gray-700">
          Our office is pleased to offer certificates for a range of achievements and milestones for constituents and local organizations.
        </p>
        <p className="mb-4 text-gray-700">
          We are also happy to submit requests to the office of the Prime Minister, the Governor General, and the King for significant milestones.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Greetings from the Prime Minister:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>65th birthdays and up (at 5-year intervals)</li>
            <li>100th birthdays and up (every year)</li>
            <li>25th wedding anniversaries and up (at 5-year intervals)</li>
            <li>25th anniversaries of life together and up (at 5-year intervals)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Greetings from the Governor General:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>90th birthdays and up</li>
            <li>50th wedding anniversaries and up</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Greetings from His Majesty the King:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>100th birthdays and up</li>
            <li>60th wedding anniversaries and up</li>
          </ul>
        </div>
        <p className="mb-4 text-gray-700">
          We are also happy to provide certificates of achievement for constituents and local organizations. In some situations, notes of congratulations from other relevant government officials can also be requested.
        </p>
        <p className="text-gray-700">
          Certificates from our office typically arrive within 2 weeks of request. Please allow up to 6 weeks for greetings from other offices to arrive.
        </p>
      </div>

      {/* Certificate Type Selector */}
      <div className="mb-6">
        <label htmlFor="certificateSelector" className="mr-2 font-medium text-gray-800">
          Select Certificate Type:
        </label>
        <select
          id="certificateSelector"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="birthday">Birthday Certificate</option>
          <option value="birthday-card">Birthday Card Certificate</option>
          <option value="anniversary">Anniversary Certificate</option>
          <option value="unique">Unique Certificate</option>
        </select>
      </div>

      {/* Conditional Certificate Components */}
      <div>
        {select === "birthday" && <BirthdayCertificate />}
        {select === "birthday-card" && <BirthdayCardCertificate />}
        {select === "anniversary" && <AnniversaryCertificate />}
        {select === "unique" && <UniqueCertificate />}
      </div>
    </section>
  );
};

export default Certificates;
