const AmbassadorCTA = () => {
  return (
    <section className="px-4 sm:px-8">
      <div className="bg-text-primary text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Become an Ambassador</h2>
          <p className="text-gray-300 mt-2 mb-6">Love your results? Share your journey and earn rewards. Our Ambassador Program offers exclusive discounts and credits for every successful referral.</p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Join the Program</span>
          </button>
        </div>
        <div className="flex-shrink-0">
          <img className="w-64 h-64 object-cover rounded-full" alt="A group of diverse and happy people collaborating." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANuV1yvzJtUsAqa_kfqYqm3UcQ7iuB-Xep4CDkBtBXdmmSDcjKX6VtMOu4-nkaDYe-dTQW-KtlSnRL0uIDt3DfikB-d-P3z50XpMIH1P__JlLA9Qkk7h4UErYOV2y0eYp52DLiNZjtFZfXDhrsLoAm0ik3cZvI3CQYTFHV7fm5i-1G8KQoSHVnOAXPjhyDEyc95lEsfsyivCIJ0KaAN_45iQu_YsfoBhHYz_s6gihkXbzVCJLfe1lvaIJFcouEgCn7IuApBFZBdII"/>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorCTA;
