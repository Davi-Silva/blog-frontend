import React, { Component } from "react";

import List from "../course/courseList.component";

export default class CourseContent extends Component {
  courses = [
    {
      type: "Courses",
      category: "Programming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "Suspendisse felis ma felis maurit quis lacinia sed, viverra eget libero. Maecenas nec oru sed dolor. Donecbus auctor."
    },
    {
      type: "Courses",
      category: "Gaming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "ullam fringilla porta ante id molestie. Donec placerat nibh tortor, sed hendrerit purus mollis sed. Suspendisse lacinia vulputate felis volutpat dignissim. Integer ac lacus nibh. Nullam viverra elementum commodo. Morbi vitae magna sodales, suscipit tortor id, suscipit tortor. Phasellus vitae"
    },
    {
      type: "Courses",
      category: "Marketing",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "viverra. Nullam tortor dui, imperdiet a nunc ac, pharetra gravida arcu. Aliquam tincidunt purus consectetur lorem rhoncus maximus. Curabitur"
    },
    {
      type: "Courses",
      category: "Programming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "Praesent malesuada metus vitae laoreet sodales. Nulla sit amet lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nos"
    },
    {
      type: "Courses",
      category: "Programming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "t. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis ut augue non aliquam. Aenean a pulvinar odio. Curabitur fringilla diam"
    },
    {
      type: "Courses",
      category: "Programming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        " id molestie. Donec placerat nibh tortor, sed hendrerit purus mollis sed. Suspendisse lacinia vulputate felis volutpat dignissim. Integer ac lac"
    },
    {
      type: "Courses",
      category: "Programming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "l ac ultricies euismod. Nam vitae venenatis nulla. Curabitur sit amet ante vel risus faucibus ullamcorper. Quisque mattis vel diam id viverra. Nullam tortor dui, imperdiet a nunc ac, pharetra gravida arcu. Aliquam tincidunt purus consectetur lorem rhoncus maximus. Curabitur"
    },
    {
      type: "Courses",
      category: "Programming",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "aliquet. Donec auctor fermentum est, at aliquam sapien pharetra ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis ut"
    },
    {
      type: "Courses",
      category: "Learning",
      title: "Course Name",
      date: "Oct 19th 1996",
      description:
        "uere ex tincidunt vitae. Morbi luctus commodo purus, vel bibendum felis dictum quis. Donec sed venenatis tortor. Morbi placerat viverra condimentum. Duis vehic"
    }
  ];

  render() {
    return (
      <div style={{ height: "100%" }}>
        <ul>
          {this.courses.map((course, key) => {
            return (
              <List
                key={key}
                type={course.type}
                category={course.category}
                title={course.title}
                date={course.date}
                description={course.description}
                liID={`c-${key}`}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
