import React, { Component } from 'react';
import AdSense from 'react-adsense';

// import { AdSquare } from '../../../styled-components/advertisements.styled-components';

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
			// console.log(
			// 	"this.state.containerClassName:",
			// 	this.state.containerClassName
			// );
		} else {
			this.setState({ containerClassName: "adSquareContainerRelative" });
			// console.log(
			// 	"this.state.containerClassName:",
			// 	this.state.containerClassName
			// );
		}
	};

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    // const { containerClassName } = this.state;
    return (
      <>
        <AdSense.Google
          client='ca-pub-3011749340662383'
          slot='7806394673'
          style={{ width: 500, height: 300, float: 'left' }}
          format=''
        />
      </>
    );
  }
}
