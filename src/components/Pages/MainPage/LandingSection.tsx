import CardInfo from "./CardInfo";

const LandingSection = () => {
  return (
    <section className="relative z-0 w-full bg-black px-6 pb-12 pt-36 sm:pb-24 sm:pt-52">
      <div className="z-10 flex w-full items-center justify-center">
        <CardInfo />
      </div>
      <div className="z-0">
        <img
          src="/images/background-squares.png"
          alt="bg-image"
          className="absolute left-0 top-0 z-0 h-[100dvh] w-full"
        />
        <img
          src="/images/stars.png"
          alt="stars"
          className="absolute -right-6 top-[192px] hidden sm:-left-6 sm:block"
        />
      </div>
    </section>
  );
};

export default LandingSection;
