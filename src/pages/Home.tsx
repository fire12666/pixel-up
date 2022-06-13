import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Popup } from '../components/Session/Popup';
import PreviewPopup from '../components/Session/Popup/PreviewPopup';
import { Preview } from '../components/Session/Preview';

import { AppContext } from '../contexts';
import { useModal } from '../hooks';

export const Home = () => {
  const context = useContext(AppContext);
  const { isShown: showPreviewPopup, toggle: togglePreviewPopup } = useModal();

  return (
    <div id="content-wrapper">
      <Helmet>
        <title>
          PixelUp
        </title>
      </Helmet>
      <Typography variant="h4">{`Welcome back, ${context.user ? context.user.name : 'null'} 🎃`}</Typography>
      <hr />
      <br />
      <Typography variant="h5">{`Check out these drawings!`}</Typography>
      <br />
      <Preview title='Drawing 1' author='Booo' togglePopup={togglePreviewPopup} />

      <Popup
        isShown={showPreviewPopup}
        hide={togglePreviewPopup}
        headerText={"Drawing 1"}
        modalContent={<PreviewPopup />}
      />

    </div>
  );
};
