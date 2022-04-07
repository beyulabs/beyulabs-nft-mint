interface RoadmapItem {
  title: string;
  description: string | React.ReactNode;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: "Events",
    description: (
      <>
        <p className="mb-4">
          It takes more than just grinding behind the scenes to grow an
          ecosystem. Exclusive hybrid experiences for crew members, layering the
          physical and virtual worlds together to showcase the community talent
          and network. Fusings both worlds to rival even Web2.
        </p>
        <ul className="list-disc ml-6">
          <li>Art Gallery Showcase</li>
          <li>Project Launchpad</li>
          <li>Web3 Hackathon</li>
          <li>Whales Tanks</li>
          <li>Secret Gameshow</li>
          <li>Community Festival</li>
        </ul>
      </>
    ),
  },
  {
    title: "Mission Board",
    description:
      "A bounty hub empowering freelancers, project teams, and agencies alike. With the Web3 space growing into countless sub-communities of creators and thinkers, we are able to create a flexible and secure system of opportunities and relationships. Holders have priority access to a marketplace of talent, powered by partnerships and individual professionals who are invested in the space (and its growth).",
  },
  {
    title: "Launchpad",
    description:
      "When engineering this new world of web3 and creating a business, not every vessel will reach its final destination. The BeYu Labs Team is here to guide you on your journey via project advisory, consultations, and continued support from ideation through project launch. A navigation  system to launch your own mission.",
  },
  {
    title: "Project Showcase",
    description:
      "A spotlight on some of our Holder's Top Projects via Panels, Interviews, Podcast, Collabs, and Dedicated Discord channels. We are passionate about connecting crew members to build innovative projects, and want to showcase these projects to our community and partner communities. A win for you is a win for all.",
  },
  {
    title: "Partnerships",
    description:
      "The power of community goes a long way on [planet name]. We are carefully vetting project teams and partnerships with brands that are aligned with our vision of empowering web3 entrepreneurship and creating a safe space for collective growth.",
  },
  {
    title: "Royalties",
    description:
      "X% goes to Community Chest to be re-invested as decided by our Holders. The possibilities are truly endless, and we believe in bringing continued value to the community. Some options include: investing into blue chip projects, metaverse land, conferences, or project teams that are incubated from our ecosystem.",
  },
  {
    title: "Commercial Use",
    description: (
      <span>
        As a Holder, leverage our brand to propel your vision for your own
        voyage. Holders are granted commercial rights to the [PROJECT NAME] NFTs
        and <span className="font-bold">can get creative</span> with derivative
        projects, collaborations, and more. Why build a brand from scratch when
        you can use a catalyst?
      </span>
    ),
  },
  {
    title: "Charitable Giving",
    description: (
      <span>
        We’ll be donating X% of proceeds from mint to a charity that’s aligned
        with our overall vision:{" "}
        <a className="text-violet-400" href="https://www.nypace.org">
          NY PACE
        </a>
        , supporting under-represented, under-resourced entrepreneurs to get
        their business endeavors off the ground. Future charities we donate to
        will be decided by the community to ensure that everyone is aligned with
        the cause and we are giving back to the greater community in a huge way.
      </span>
    ),
  },
];

const RoadmapTLDR = () => {
  const createRoadmap = () => {
    return roadmapItems.map((item: RoadmapItem) => {
      return (
        <div
          key={item.title}
          className="w-full bg-stone-50 rounded-xl shadow p-4 mb-6"
        >
          <p className="text-xl font-semibold mb-4">{item.title}</p>
          {item.description}
        </div>
      );
    });
  };

  return <>{createRoadmap()}</>;
};

export default RoadmapTLDR;
