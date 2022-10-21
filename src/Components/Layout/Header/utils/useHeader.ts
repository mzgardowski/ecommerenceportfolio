import { useState } from 'react';
const useHeader = () => {
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  const [openLinks, setOpenLinks] = useState<boolean>(false);

  const onAccountHandler = () => {
    setOpenAccount((prev) => !prev);
    setOpenLinks(false);
  };

  const onLinksHandler = () => {
    setOpenLinks((prev) => !prev);
    setOpenAccount(false);
  };

  return {
    openAccount,
    openLinks,
    onAccountHandler,
    onLinksHandler,
  };
};

export default useHeader;
