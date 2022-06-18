interface CalloutSectionProps {
  description: React.ReactNode;
  image: React.ReactNode;
  title: string;
  bgImage?: string;
}

const CalloutSection = ({
  description,
  image,
  title,
  bgImage,
}: CalloutSectionProps) => {
  return (
    <section className="pb-20 pt-14">
      <div className="flex flex-row justify-center">
        <div className="w-1/3">{image}</div>
        <div className="w-2/3 pl-12 pr-6">
          <h2 className="text-white uppercase bold text-5xl mb-7">{title}</h2>
          <div className="text-astromapGrayText text-lg">{description}</div>
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;
