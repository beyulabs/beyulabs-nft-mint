interface CalloutSectionProps {
  description: React.ReactNode;
  image: React.ReactNode;
  title: string;
}

const CalloutSection = ({ description, image, title }: CalloutSectionProps) => (
  <div className="flex flex-col md:flex-row justify-center items-center">
    <div className="w-80 md:w-1/3 relative">{image}</div>
    <div className="md:w-2/3 md:pl-12 md:pr-6 ml-20 lg:ml-40">
      <h2 className="text-white uppercase font-bold font-sans text-5xl mb-7 px-6 md:px-0 w-titleMission">
        {title}
      </h2>
      <div className="text-astromapGrayText text-lg px-6 md:px-0">
        {description}
      </div>
    </div>
  </div>
);

export default CalloutSection;
