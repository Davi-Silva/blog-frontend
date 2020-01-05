import React, { useState, useEffect } from 'react';

import {
  Wrapper,
  DayMonthYear,
} from '../../../styled-components/blog-time-date.styled-components';


const CurrentDate = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const currentDate = new Date();

  useEffect(() => {
    setDay(currentDate.getUTCDate());
    if ((currentDate.getUTCMonth() + 1) === 1) {
      setMonth('January');
    } else if ((currentDate.getUTCMonth() + 1) === 2) {
      setMonth('Februeary');
    } else if ((currentDate.getUTCMonth() + 1) === 3) {
      setMonth('March');
    } else if ((currentDate.getUTCMonth() + 1) === 4) {
      setMonth('April');
    } else if ((currentDate.getUTCMonth() + 1) === 5) {
      setMonth('May');
    } else if ((currentDate.getUTCMonth() + 1) === 6) {
      setMonth('June');
    } else if ((currentDate.getUTCMonth() + 1) === 7) {
      setMonth('July');
    } else if ((currentDate.getUTCMonth() + 1) === 8) {
      setMonth('August');
    } else if ((currentDate.getUTCMonth() + 1) === 9) {
      setMonth('September');
    } else if ((currentDate.getUTCMonth() + 1) === 10) {
      setMonth('Octocber');
    } else if ((currentDate.getUTCMonth() + 1) === 11) {
      setMonth('November');
    } else if ((currentDate.getUTCMonth() + 1) === 12) {
      setMonth('December');
    }


    setYear(currentDate.getUTCFullYear());
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Wrapper>
              <DayMonthYear>
                {`${month} ${day} ${year}`}
              </DayMonthYear>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentDate;
