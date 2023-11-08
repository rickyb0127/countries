import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FilterList(props) {
  const {regionFilter, setSelectedRegion, regions} = props;
  const [showSelectOptions, setShowSelectOptions] = useState(false);

  const selectOptions = regions.map((option) => {
    return (
      <li key={option.id} className="pl-[25px] pb-[10px] cursor-pointer" onClick={() => setSelectedRegion(option)} role="option">{option.text}</li>
    )
  });

  return (
    <div className="flex">
      <div className="shadow-md rounded outline-none w-[200px] h-[50px] dark:bg-dark-blue dark:text-white" onClick={() => {setShowSelectOptions(!showSelectOptions)}}>
        <button className="flex justify-between items-center w-full h-full" onClick={() => {setShowSelectOptions(!showSelectOptions)}}>
          <div className="flex pl-[25px]">
            {regionFilter && regionFilter.value ? regionFilter.text : 'Filter by Region'}
          </div>
          <div className="flex pr-[25px]">
            <FontAwesomeIcon className="dark:text-white" icon={showSelectOptions ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"} />
          </div>
        </button>
        {showSelectOptions && 
          <ul className="relative w-[200px] pt-[15px] pb-[5px] mt-[10px] dark:bg-dark-blue bg-white shadow-md z-[10000]" id="select-dropdown">
            {selectOptions}
          </ul>
        }
      </div>
    </div>
  )
}

export default FilterList;