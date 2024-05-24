import Link from "next/link";

type DefaultToolsProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const DefaultTools: React.FC<DefaultToolsProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="HStack gap-10">
      <Link
        className={`opacity-${activePage === "/" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/")}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`opacity-${activePage === "/howtouse" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/howtouse")}
        href="/howtouse"
      >
        How to use
      </Link>
      <Link
        className={`opacity-${activePage === "/support" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/support")}
        href="/support"
      >
        Support
      </Link>
    </div>
  );
};

export default DefaultTools;
