import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    const updatedIsDarkMode = !isDarkMode;
    const html = document.querySelector("html");
    updatedIsDarkMode === true ? html.classList.add('dark') : html.classList.remove('dark');

    setIsDarkMode(updatedIsDarkMode);
  };

  return (
    <nav id="nav" className="dark:bg-dark-blue bg-white drop-shadow-sm">
      <div className="flex h-16 items-center justify-between mobile:px-[20px] tablet:px-[50px] desktop:px-[100px] max-w-[2000px] mx-auto">
        <div className="flex">
          <div className="dark:text-white font-extrabold text-[20px]">Where in the world?</div>
        </div>
        <div className="flex">
          <div className="flex dark:text-white items-baseline cursor-pointer" onClick={() => toggleDarkMode()}>
            <FontAwesomeIcon className="pr-[10px] rotate-[-22deg]" icon={isDarkMode ? "fa-solid fa-moon" : "fa-regular fa-moon"} />
            <div>Dark Mode</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;