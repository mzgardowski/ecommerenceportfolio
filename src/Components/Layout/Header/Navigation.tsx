import { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ChevronLeft } from 'react-bootstrap-icons';

const Navigation = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const onToggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className='col-3 col-sm-3'>
      {menu ? (
        <ChevronLeft
          cursor='pointer'
          onClick={() => onToggleMenu()}
          size={30}
          className='m-2'
        />
      ) : (
        <List
          cursor='pointer'
          onClick={() => onToggleMenu()}
          size={30}
          className='m-2'
        />
      )}
      {menu && (
        <div className='position-fixed bg-light col-12'>
          <ul className='m-1 p-1 list-group'>
            <li>
              <Link onClick={() => onToggleMenu()} to='/'>
                HomePage
              </Link>
            </li>
            <li>
              <Link onClick={() => onToggleMenu()} to='/product'>
                Product
              </Link>
            </li>
            <li>
              <Link onClick={() => onToggleMenu()} to='/product'>
                Product
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
