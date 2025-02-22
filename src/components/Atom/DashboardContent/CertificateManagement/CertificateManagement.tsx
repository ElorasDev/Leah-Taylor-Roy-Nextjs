"use client";
import { useState } from "react";
import { certificateNavigation } from './data';
import BirthdayCertificateManagement from './BirthdayCertificate/BirthdayCertificateManagement ';
import BirthdayCardCertificateManagement from './BirthdayCardCertificate/BirthdayCardCertificateManagement';
import AnniversaryCertificateManagement from './AnniversaryCertificate/AnniversaryCertificateManagement';
import UniqueCertificateManagement from './UniqueCertificate/UniqueCertificateManagement';

const CertificateManagement = () => {
  const [selectedType, setSelectedType] = useState("birthday");

  const renderCertificateComponent = () => {
    switch (selectedType) {
      case "birthday":
        return <BirthdayCertificateManagement />;
      case "birthday-card":
        return <BirthdayCardCertificateManagement />;
      case "anniversary":
        return <AnniversaryCertificateManagement />;
      case "unique":
        return <UniqueCertificateManagement />;
      default:
        return null;
    }
  };

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 mt-4 text-gray-800">
        <span className="text-primary">Certificate</span> Management
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certificateNavigation.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedType(item.type)}
            className={`bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer ${
              selectedType === item.type ? "border-2 border-primary" : ""
            }`}
          >
            <div className="text-4xl text-primary">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8">{renderCertificateComponent()}</div>
    </section>
  );
};

export default CertificateManagement;
