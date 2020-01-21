import React, { useEffect, useState } from 'react';

import {
  RecentActivitiesCover,
  RecentActivitiesH2,
  RecentActivityWrapper,
  RecentActivitiesAuthorPicture,
  RecentActivityTitle,
  RecentActivityPublishedOn,
} from '../../../styled-components/profile.styled.components';

const RecentActivities = (props) => {
  const [activitiesState, setActivitiesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(false);
  const {
    authorPicture,
  } = props;
  const getActivities = async () => {
    const {
      activities,
    } = props;
    console.log('activities array:', activities);
    setLoading(true);
    const response = await fetch('http://34.205.75.176:5000/blog/get/user/activities', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        posts: activities,
      }),
    });
    const data = await response.json();
    console.log('data:', data);
    setActivitiesState(data);
  };

  useEffect(() => {
    try {
      getActivities();
      setFetched(true);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }, []);

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const formatDate = (uploadedOn) => {
    const dateFormatted = parseDate(uploadedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
  };


  let Activities;
  console.log('RECENT ACTIVITIES');

  return (
    <>
      <div className="col-12">
        <RecentActivitiesH2>Recent Activities</RecentActivitiesH2>
      </div>

      {activitiesState.map((activity) => (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          key={activity.id}
        >
          <RecentActivityWrapper
            to={`/blog/${activity.slug}`}
          >
            <RecentActivitiesCover
              style={{
                backgroundImage: `url(${activity.cover.url})`,
              }}
            />
            <RecentActivitiesAuthorPicture
              src={authorPicture}
            />
            <RecentActivityTitle>
              {activity.title}
            </RecentActivityTitle>
            <RecentActivityPublishedOn>
              {formatDate(activity.publishedOn)}
            </RecentActivityPublishedOn>
          </RecentActivityWrapper>
        </div>
      ))}

    </>
  );
};

export default RecentActivities;
