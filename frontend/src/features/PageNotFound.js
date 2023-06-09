import React from 'react';
import { useNavigate } from 'react-router-dom';
// import styles from '../App.module.css';
import componentStyles from './PageNotFound.module.css';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={componentStyles.notfound}>
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <div>
        <button
          type="button"
          style={{ width: 200 }}
          onClick={() => {
            navigate(-1);
          }}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
