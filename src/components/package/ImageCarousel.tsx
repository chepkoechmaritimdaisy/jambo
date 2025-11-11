// src/components/package/ImageCarousel.tsx
import React from 'react';

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJwIqMpLyyKzkGU3HA6r07c1bJ1RRgJFod9d_ZuABV7pGPyNpNs97vcUDCG5i1ME7Ee82BgRPlWUUGwwrdaVxgNS5h58hZOmq19HynAxgHWEdy9jSuoA_dX6Kqj6nC5fz6rPSMgj37D_mnjlpChYsbOHX58hGAPd-sszF2kpwes_5EqHI7BYBhdYHnq2xcUuLqjjMPDuqJSqkMwGiAFSXLfUiG2aX7wMEmWAwgu3p8XKvPTaJAjqjSghoJccGafz_e5_jx_oQ6U_g",
    title: "The Removal Process",
    subtitle: "PicoSure Laser in Action",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmSMJPiDBOTFFykt-JFuiucQXt13cHxYl0HHcOYIwV1imCjk0PCnJDciVrE2t9kmU0B_FBbQsAvfALeBATwW2D2BYDkrzx4WIx_C5_IrmdU_ucW-2Z3xh2RX4mgEgvlZtfvaDuko1Rsabz30nGGGloY0lx2PxyvXSyQPHrpjtLZDs2lzVbaLcPgEEMRrOkt5Y62zirI4A006N42EspO07INAf8b6STpH-Q46A1MFoqIhq4b_j17Uu4nx2S1HYB_TwfZ0Mzb08oMVY",
    title: "Visible Fading After 3 Sessions",
    subtitle: "Progress You Can See",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYwbpQ-D-vFa7gGaOG6ZX22dVDKi8QwEHM2HUAQZZLH7BxKsJsECi7kRvjPNsJwWG1kFuN4NvZDveDQpQbh6XL3EmPB1DplUNiyAhssYoS_-u2kWiFGmyQc9G9lNftii5Z9ELHcMsPgNIvGjdTr2FlcPY_es_sJjfgGeO8Cb8sKvv9nP4W_ukxNs8CH14_peXU4OAHefHgjIyr_mNs4K6hJ6_JLxm6adZUl6EfUg0xP6s1TM3TepmVBg0X-Daw3NTomnkv06HLqAY",
    title: "Complete Removal Example",
    subtitle: "John's Sleeve Removal Journey",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyO8cRhrqmDBv-WpcGbrgVCBhvR7YY0V6iG2K2yWR-KRSfxoIgvE2dMtVvMJl2bxnt-5mbp_7Y6awAhJUjVY148-DOZMU0xi1dRSVrh7WBkygz24qXJ5o_2QEKU2Nn5eGB535SEEyBbJkCm7d2Bo09uwOEeqr9fLe33_9HpjQ6Lt6ZUEv1_0e0WvME21CFcdgN9e8xwAucOHXgnbF03xKNGRZ1MpPKfgByBNBBWrrg4lDF5pgdLyWixIdK7gOo9YH6JzO529Mj4is",
    title: "Our Aftercare Kit",
    subtitle: "Ensuring Optimal Healing",
  }
];

const ImageCarousel = () => {
  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold text-text-dark mb-4">Gallery of Results</h3>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-1 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex h-full w-64 flex-shrink-0 flex-col gap-3 rounded-lg">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                style={{backgroundImage: `url("${image.src}")`}}
              ></div>
              <div>
                <p className="text-text-dark text-base font-medium leading-normal">{image.title}</p>
                <p className="text-text-light text-sm font-normal leading-normal">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
