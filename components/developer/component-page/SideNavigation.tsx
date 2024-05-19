import dynamic from 'next/dynamic';
import { useState } from 'react';

type SideNavigationProps = {
  setSelectedItem: (item: string) => void;
};

const SideNavigation: React.FC<SideNavigationProps> = ({ setSelectedItem }) => {
  const [selected, setSelected] = useState<string | null>('installation'); // Set the default selected item to "installation"

  const handleNavClick = (item: string) => {
    setSelected(item);
    setSelectedItem(item);
  };

  const getItemClassNames = (item: string) => {
    const isActive = selected === item;
    return `pl-3 pr-3 pt-2 pb-2 rounded-md cursor-pointer ${
      isActive ? 'bg-white  shadow-md dark:bg-dark-secondary opacity-100' : 'bg-transparent opacity-25'
    }`;
  };

  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-3">
        <p className="font-medium">Getting Started</p>
        <ul className="list-none">
          <li onClick={() => handleNavClick('installation')} className={getItemClassNames('installation')}>
            Installation
          </li>
          <li onClick={() => handleNavClick('usage')} className={getItemClassNames('usage')}>
            Basic Usage
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-medium">Customisation</p>
        <ul className="list-none">
          <li onClick={() => handleNavClick('parameters')} className={getItemClassNames('parameters')}>
            Parameters & Options
          </li>
          <li onClick={() => handleNavClick('methods')} className={getItemClassNames('methods')}>
            Methods & Properties
          </li>
          <li onClick={() => handleNavClick('events')} className={getItemClassNames('events')}>
            Events
          </li>
          <li onClick={() => handleNavClick('styles')} className={getItemClassNames('styles')}>
            Styles
          </li>
          <li onClick={() => handleNavClick('typescript')} className={getItemClassNames('typescript')}>
            Using Typescript
          </li>
        </ul>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(SideNavigation), { ssr: false });
