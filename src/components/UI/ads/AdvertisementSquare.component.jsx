import React, { Component } from 'react';

import { AdSquare } from '../../../styled-components/advertisements.styled-components';

export default class AdvertisementSquare extends Component {
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
			this.setState({ containerClassName: "adSquareContainerFixed" });
			console.log(
				"this.state.containerClassName:",
				this.state.containerClassName
			);
		} else {
			this.setState({ containerClassName: "adSquareContainerRelative" });
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
    const { containerClassName } = this.state;
    return (
      <>
        <AdSquare className={containerClassName}>
          <p style={{ color: '#999', textAlign: 'center', marginTop: '15px' }}>
						Advertisement
          </p>
        </AdSquare>
      </>
    );
  }
}
