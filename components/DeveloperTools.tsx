import Link from "next/link";

type DeveloperToolsProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const DeveloperTools: React.FC<DeveloperToolsProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="HStack gap-10">
      <Link
        className={`opacity-${activePage === "/developer/documentation" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/developer/documentation")}
        href="/developer/documentation"
      >
        Documentation
      </Link>
      <Link
        className={`opacity-${activePage === "/developer/components" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/developer/components")}
        href="/developer/components"
      >
        Components
      </Link>
      <Link
        className={`opacity-${activePage === "/developer/design" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/developer/design")}
        href="/developer/design"
      >
        Design
      </Link>
      <Link
        className={`opacity-${activePage === "/developer/support" ? "100" : "25"} hover:opacity-100 cursor-pointer`}
        onClick={() => setActivePage("/developer/support")}
        href="/developer/support"
      >
        Support
      </Link>
    </div>
  );
};

export default DeveloperTools;
