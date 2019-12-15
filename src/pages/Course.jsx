/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';

const Course = (props) => {
  useEffect(() => {

  }, []);
  const {
    params,
  } = props.match;
  console.log('params:', params);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{params.slug}</h1>
        </div>
      </div>
    </div>
  );
};

export default Course;
