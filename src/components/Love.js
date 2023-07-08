import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../components/User/AuthContext';
import { useNavigate } from 'react-router-dom';

const Love = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isAuthenticated && !isInitialRender.current) {
      navigate('/');
    }
    isInitialRender.current = false;
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <video className="w-full" controls autoPlay>
          <source src="https://westream.ge/lilac2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <h2 className="text-center Comfortaa">Access denied! Please enter the correct password first.</h2>
      )}
    </div>
  );
};

export default Love;


