import React, { Component } from 'react';

import {
    Cover,
  } from '../../../styled-components/podcast.styled-components';

export default class CoverImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerClassName: '',
            stickyHeight: null,
            sticked: null,
        };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.listenScrollEven = this.listenScrollEvent.bind(this);
    }
    
    listenScrollEvent = e => {
      const {documentHeight} = this.props;
      let height = window.document.body.children[1].children[2].clientHeight;
      // console.log("height:", height)
      if (window.scrollY > 56 && window.scrollY <= (height * 0.8)) {
          this.setState({ containerClassName: "podcastCoverImageFixed", stickyHeight: null });
          // console.log(
          //     "this.state.containerClassName:",
          //     this.state.containerClassName
          // );
      } 
      if(window.scrollY <= 56) {
          this.setState({ containerClassName: "podcastCoverImageRelative", stickyHeight: null });
          // console.log(
          //     "this.state.containerClassName:",
          //     this.state.containerClassName
          // );
      } 
      if (window.scrollY > (height * 0.8)){
        this.setState({ containerClassName: "podcastCoverImageSticky", stickyHeight: (height * 0.8) });
        // console.log(
        //     "this.state.containerClassName:",
        //     this.state.containerClassName
        // );
      }
    };

    componentDidMount() {
      console.log(window.scrollY)
    window.addEventListener('scroll', this.listenScrollEvent);
    }
    

  render() {
    const {cover, coverAlt} = this.props;
    const {containerClassName, stickyHeight} = this.state;
    return (
      <>
        <Cover className={containerClassName}
          src={cover}
          alt={coverAlt}
          style={{top: stickyHeight}}
        />
      </>
    );
  }
}
