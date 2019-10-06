import React, { Component } from "react";

import List from "../list.component";

export default class CourseContent extends Component {
  podcasts = [
    {
      type: "Podcasts",
      category: "Programming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "Suspendisse felis ma felis maurit quis lacinia sed, viverra eget libero. Maecenas nec oru sed dolor. Donecbus auctor."
    },
    {
      type: "Podcasts",
      category: "Gaming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "ullam fringilla porta ante id molestie. Donec placerat nibh tortor, sed hendrerit purus mollis sed. Suspendisse lacinia vulputate felis volutpat dignissim. Integer ac lacus nibh. Nullam viverra elementum commodo. Morbi vitae magna sodales, suscipit tortor id, suscipit tortor. Phasellus vitae"
    },
    {
      type: "Podcasts",
      category: "Marketing",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "viverra. Nullam tortor dui, imperdiet a nunc ac, pharetra gravida arcu. Aliquam tincidunt purus consectetur lorem rhoncus maximus. Curabitur"
    },
    {
      type: "Podcasts",
      category: "Programming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "Praesent malesuada metus vitae laoreet sodales. Nulla sit amet lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nos"
    },
    {
      type: "Podcasts",
      category: "Programming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "t. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis ut augue non aliquam. Aenean a pulvinar odio. Curabitur fringilla diam"
    },
    {
      type: "Podcasts",
      category: "Programming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        " id molestie. Donec placerat nibh tortor, sed hendrerit purus mollis sed. Suspendisse lacinia vulputate felis volutpat dignissim. Integer ac lac"
    },
    {
      type: "Podcasts",
      category: "Programming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "l ac ultricies euismod. Nam vitae venenatis nulla. Curabitur sit amet ante vel risus faucibus ullamcorper. Quisque mattis vel diam id viverra. Nullam tortor dui, imperdiet a nunc ac, pharetra gravida arcu. Aliquam tincidunt purus consectetur lorem rhoncus maximus. Curabitur"
    },
    {
      type: "Podcasts",
      category: "Programming",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "aliquet. Donec auctor fermentum est, at aliquam sapien pharetra ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis ut"
    },
    {
      type: "Podcasts",
      category: "Learning",
      title: "Podcast Name",
      date: "Oct 19th 1996",
      description:
        "uere ex tincidunt vitae. Morbi luctus commodo purus, vel bibendum felis dictum quis. Donec sed venenatis tortor. Morbi placerat viverra condimentum. Duis vehic"
    }
  ];

  render() {
    return (
      <div style={{ height: "100%" }}>
        <ul>
          {this.podcasts.map((podcast, key) => {
            return (
              <List
                key={key}
                type={podcast.type}
                category={podcast.category}
                title={podcast.title}
                date={podcast.date}
                description={podcast.description}
                liID={`p-${key}`}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
