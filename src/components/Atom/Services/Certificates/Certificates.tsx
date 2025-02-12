"use client";

import { useState } from "react";
import BirthdayCertificate from "./BirthdayCertificate/BirthdayCertificate";
import BirthdayCardCertificate from "./BirthdayCardCertificate/BirthdayCardCertificate";
import AnniversaryCertificate from "./AnniversaryCertificate/AnniversaryCertificate";
import UniqueCertificate from "./UniqueCertificate/UniqueCertificate";

const Certificates = () => {
  const [select, setSelect] = useState("birthday");

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Certificate Request</h1>
      <div className="mb-6">
        <label htmlFor="certificateSelector" className="mr-1">
          Select Certificate Type:
        </label>
        <select
          id="certificateSelector"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="birthday">Birthday Certificate</option>
          <option value="birthday-card">Birthday Card Certificate</option>
          <option value="anniversary">Anniversary Certificate</option>
          <option value="unique">Unique Certificate</option>
        </select>
      </div>
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
