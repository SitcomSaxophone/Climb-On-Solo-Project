import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Icons made by <a 
          href="http://www.freepik.com" 
          title="Freepik">Freepik
        </a> from <a 
          href="https://www.flaticon.com/" 
          title="Flaticon">www.flaticon.com
        </a> is licensed by <a 
          href="http://creativecommons.org/licenses/by/3.0/" 
          title="Creative Commons BY 3.0" 
          target="_blank">CC 3.0 BY
        </a>
      </p>
    </div>
  </div>
);

export default AboutPage;
