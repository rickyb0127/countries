import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SearchField(props) {
  const {setSearchText} = props;

  return (
    <div className="flex mobile:w-full tablet:w-[350px] desktop:w-[400px] h-[50px] items-center dark:bg-dark-blue bg-white rounded shadow-md">
      <FontAwesomeIcon className="flex px-[30px] dark:text-white" icon="fa-solid fa-magnifying-glass" />
      <div className="flex w-[300px]">
        <input 
          placeholder="Search for a country..." 
          className="dark:bg-dark-blue dark:text-white outline-none w-full"
          value={props.emailInput}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchField;