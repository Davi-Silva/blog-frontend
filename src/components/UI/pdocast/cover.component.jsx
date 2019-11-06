import React, { Component } from 'react';

import {
    Cover,
  } from '../../../styled-components/podcast.styled-components';

export default class CoverImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerClassName: '',
        };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.listenScrollEven = this.listenScrollEvent.bind(this);
    }
    
    listenScrollEvent = e => {
        if (window.scrollY > 56) {
            this.setState({ containerClassName: "podcastCoverImageFixed" });
            console.log(
                "this.state.containerClassName:",
                this.state.containerClassName
            );
        } else {
            this.setState({ containerClassName: "podcastCoverImageRelative" });
            console.log(
                "this.state.containerClassName:",
                this.state.containerClassName
            );
        }
    };

    componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    }
    

  render() {
    const {cover, coverAlt} = this.props;
    const {containerClassName} = this.state;
    return (
      <>
        <Cover className={containerClassName}
          src={cover}
          alt={coverAlt}
        />
      </>
    );
  }
}
