import { PlusUserIcon } from '../../../assets/icons/PlusUserIcon';
import { SearchIcon } from '../../../assets/icons/SearchIcon';

export const SearchBar: React.FC = () => {
  return (
    <div className='flex item-center px-2 py-2 border-b border-dark'>
      <button className='flex items-center justify-center text-white border-2 border-dark rounded-3xl p-2 mr-1'>
        <PlusUserIcon className='text-dark size-6' />
      </button>
      <form className='flex flex-1 border-2 border-dark rounded-3xl py-1' action="">
        <input className=' flex-1 focus:outline-none ml-3 mr-2' type="text" />
        <button className='flex items-center justify-center text-white border-2 border-dark rounded-3xl p-1 mr-1'>
          <SearchIcon className='text-dark size-6' />
        </button>
      </form>
    </div>
  );
}
