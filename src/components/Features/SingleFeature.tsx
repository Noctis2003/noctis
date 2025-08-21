import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md mx-auto">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white text-center">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
