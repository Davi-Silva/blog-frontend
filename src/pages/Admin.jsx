import React from 'react';

import CoursePanel from '../components/admin/panel/course.component';
import PodcastPanel from '../components/admin/panel/podcast.component';
import BlogPanel from '../components/admin/panel/blog.component';
import SettingsPanel from '../components/admin/panel/settings.component';

function Admin() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <CoursePanel />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <PodcastPanel />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <BlogPanel />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <SettingsPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
