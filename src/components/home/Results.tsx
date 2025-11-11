const Results = () => {
  return (
    <section className="px-4 sm:px-8 py-10 md:py-16 bg-accent-light">
      <h2 className="text-text-primary text-center text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">Real Results, Clear Skin</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" alt="Before and after comparison of a colorful tattoo on an arm, showing significant fading after laser removal treatment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXfKrpKcS9fLZzZVocJ2yYT3VPZwzrwuc2BoiIHcbsehDR-X1thRQ0WJRKHW4WYPmPxLcNUGsVXjuMPRn1njs6Q66_0pDPkRXpy4Dp-FI-g2UX1sY6iCCfhoAs_MFjx8SINJkh_N3DUYq2MvzTTehpNSE3KE4S3dDQEyea7jxMFXzkuoQJ5gOiSnG1JNEh8djh-5VhinahYdMUyHPHnAT9J1erlu6usU9djmXKw1a51gehU8VHiG9AYRRT3UgIwOGOuM81xFdighc"/>
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" alt="Close-up before and after image of a black ink tattoo on a back, demonstrating the effectiveness of the removal process." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmgE08QtQMr_KIht081yj1CJmZdp0y4gKIikspuSkc5nNA6-GPE5Gy4qOkSS_55g6kvP3BqOXtZQsnqUS7wqGiiVjA_IbtgHXS7KX2Yjky22c0bhsL_BT7UomKKr7uwTJ4wipASlSCYUnR0HJf6UEkaj96hSCWdek5TsxqG6e0ahwvYsW0uoNVwo4G55ayXxpw2Sl_Jetz8h3Cqim-OMGzQxSvghD-mJtBHnndfJhnXYSR6j6Vn3eIwLwnVe0hF6RsymiR5v1ilTc"/>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto">
          <span className="truncate">View Gallery</span>
        </button>
      </div>
    </section>
  );
};

export default Results;
