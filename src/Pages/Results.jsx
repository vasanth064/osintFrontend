import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Results = ({ results }) => {
  const { email, mobile, username } = results;
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    results &&
      setTimeout(() => {
        setLoaded(false);
      }, 5000);
  });
  return (
    <>
      {loaded ? (
        <progress id='progress-2'></progress>
      ) : (
        results && (
          <section id='results'>
            <h3>Results </h3>
            {email && (
              <>
                <h4>E-Mail ID</h4>
                <p>
                  <Link to='/email'>Investigation results form email ID</Link>
                </p>
              </>
            )}
            {mobile && (
              <>
                <h4>Mobile Number</h4>
                <p>
                  <Link to='/mobile'>
                    Investigation results form Mobile Number
                  </Link>
                </p>
              </>
            )}
            {username && (
              <>
                <h4>Username</h4>
                <p>
                  <Link to='/username'>
                    Investigation results form Username
                  </Link>
                </p>
              </>
            )}
            {((mobile && username) ||
              (mobile && email) ||
              (email && username)) && (
              <>
                <h4>Summary</h4>
                <p>
                  <Link to='/summary'>View Consolidated Results</Link>
                </p>
              </>
            )}
          </section>
        )
      )}
    </>
  );
};

export default Results;
