import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#1a0033] dark:to-[#000000]">
        <div className="container">
          <SectionTitle
            title="Our Philosophy"
            paragraph="We believe in building products that truly matter—designed with purpose, driven by passion, and focused on real-world impact.
            We create the future."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
