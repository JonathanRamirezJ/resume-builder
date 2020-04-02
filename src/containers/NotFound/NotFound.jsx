// Third-party dependencies
import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

// Own constants/actions/components
import { LOCALE_ES } from 'constants/strings';

// Styles
import './NotFound.scss';

const NotFound = () => {
  const constants = LOCALE_ES.pages.notFound;
  const fullLogo = `${process.env.PUBLIC_URL}/assets/img/full_logo.png`;

  return (
    <section className="not-found">
      <div className="imagewrapper">
        4
        <img src={fullLogo} alt="leviahack_logo" />
        4
      </div>

      <div className="message">
        <h1>{ constants.title }</h1>
        <p>{ constants.description }</p>
        <Button variant="contained" color="primary">
          { constants.button }
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
