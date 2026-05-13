const FeatureCard = ({ icon, title, description, index = 0 }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DF0D86]/10 blur-2xl transition group-hover:bg-[#63208A]/15" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#63208A] to-[#DF0D86] text-2xl text-white shadow-lg shadow-pink-100">
            {icon}
          </div>

          <span className="text-4xl font-black text-slate-100">
            {number}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-[#63208A]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;