import { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ChevronLeft } from 'react-bootstrap-icons';

const Navigation = ({
  openLinks,
  onLinksHandler,
}: {
  openLinks: boolean;
  onLinksHandler: () => void;
}) => {
  return (
    <>
      <div className='col-3 col-sm-3'>
        {openLinks ? (
          <ChevronLeft
            cursor='pointer'
            onClick={() => onLinksHandler()}
            size={30}
            className='m-2'
          />
        ) : (
          <List
            cursor='pointer'
            onClick={() => onLinksHandler()}
            size={30}
            className='m-2'
          />
        )}
        {openLinks && (
          <div className='position-fixed bg-light col-12'>
            <ul className='m-1 p-1 list-group'>
              <li>
                <Link onClick={() => onLinksHandler()} to='/'>
                  HomePage
                </Link>
              </li>
              <li>
                <Link onClick={() => onLinksHandler()} to='/product'>
                  Product
                </Link>
              </li>
              <li>
                <Link onClick={() => onLinksHandler()} to='/product'>
                  Product
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
