import { useState } from 'react';
const useHeader = () => {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openLinks, setOpenLinks] = useState<boolean>(false);

  const onLoginModalHandler = () => {
    setOpenLoginModal((prev) => !prev);
    setOpenLinks(false);
  };

  const onLinksHandler = () => {
    setOpenLinks((prev) => !prev);
    setOpenLoginModal(false);
  };

  return {
    openLoginModal,
    openLinks,
    onLoginModalHandler,
    onLinksHandler,
  };
};

export default useHeader;
