import Link from "next/link";

const Download = () => {
  return (
    <section className="py-24 px-6 bg-neutral text-white rounded-2xl shadow-2xl my-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold leading-tight mb-6 font-sans">
          Support Leah Taylor Roy’s Campaign
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans">
          Join us in supporting Leah Taylor Roy’s re-election campaign! Download and read a letter of support that highlights why Leah is the leader our community needs. Your support makes a difference!
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary opacity-80 rounded-xl blur-sm transition duration-300 group-hover:blur-md"></div>
          <Link
            href="https://tysgmcveyifgbduukmqj.supabase.co/storage/v1/object/sign/documents/Open%20Letter.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvT3BlbiBMZXR0ZXIucGRmIiwiaWF0IjoxNzQ1Nzg5MDAzLCJleHAiOjE3NzczMjUwMDN9.ooKl61wHHXd9q3lbE6FFD9qia0AumCnghfbErm3x9qg"
            download
            className="relative inline-block bg-primary text-white text-lg font-bold py-4 px-12 rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-secendory"
          >
            <span className="block font-sans">Download the Letter of Support</span>
          </Link>
        </div>
      </div>

      <div className="text-center">
        <p className="text-md text-gray-400 max-w-xl mx-auto font-sans">
          Every download and share helps build momentum for Leah’s re-election campaign. Let’s make sure her voice is heard loud and clear!
        </p>
      </div>
    </section>
  );
};

export default Download;