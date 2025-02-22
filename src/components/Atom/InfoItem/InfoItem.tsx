const InfoItem = ({ label, value }: { label: string; value: string | number }) => (
    <>
      <dt className="font-medium text-gray-500">{label}</dt>
      <dd className="text-gray-700 break-words">{value || '-'}</dd>
    </>
  );

  export default InfoItem;