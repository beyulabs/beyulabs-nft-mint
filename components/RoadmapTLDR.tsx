interface RoadmapItem {
  title: str;
  description: str;
}

interface RoadmapQuarter {
  name: str;
  items: RoadmapItem[];
}

const roadmap: RoadmapQuarter[] = [
  {
    name: "Q1 2022",
    items: [
      {
        title: "Onboard artist",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Initiate marketing",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Launch podcast on all platforms",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Kick off AMAs and Twitter space events",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Kick off in-person happy hours in Jersey City/Manhattan",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Announce early access list process",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Community shill event",
        description: "Donec id nisl ac neque pretium congue.",
      },
    ],
  },
  {
    name: "Q2 2022",
    items: [
      {
        title: "Launch giveaways and early access spots",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Publish NFT lore/storyline",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Drop a 10k piece NFT collection",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Initiate marketing and partnership outreach",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "First hybrid event (artist showcase)",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Launch Whales Tank community pitch show",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Iniate community rewards",
        description: "Donec id nisl ac neque pretium congue.",
      },
    ],
  },
  {
    name: "Q3 2022",
    items: [
      {
        title: "First party for NFT holders",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Giveaways and airdrops for holders",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Establish a BeYu Labs clubhouse in the metaverse",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Hackathon",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Launch an advisory DAO for platinum holders",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Mission board POC",
        description: "Donec id nisl ac neque pretium congue.",
      },
    ],
  },
  {
    name: "Q4 2022",
    items: [
      {
        title: "Launch community DAO",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Initiate ERC-20 token project",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Special drops and events for platinum holders",
        description: "Donec id nisl ac neque pretium congue.",
      },
      {
        title: "Public mission board launch",
        description: "Donec id nisl ac neque pretium congue.",
      },
    ],
  },
];

const RoadmapTLDR = () => {
  const createRoadmap = () => {
    return roadmap.map((quarter) => {
      return (
        <div
          key={quarter.name}
          className="w-full bg-stone-50 rounded shadow p-4 mb-6"
        >
          <p className="text-xl text-center font-semibold mb-6">
            {quarter.name}
          </p>
          <ul className="list-disc">
            {quarter.items.map((item) => (
              <li key={item.title} className="ml-6 mb-2">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return <>{createRoadmap()}</>;
};

export default RoadmapTLDR;
