/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  SubNavigatorBar, Ul, Li, Separator,
} from '../../../styled-components/subnavbar.styled-components';

export default class SubNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerClassName: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  async componentDidMount() {
    const { media, category, title } = this.props;
    await this.setStateAsync({
      media, category, title,
    });
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async listenScrollEvent(e) {
    if (window.scrollY > 57) {
      await this.setStateAsync({ containerClassName: 'subNavBarFixed' });
      const { containerClassName } = this.state;
      console.log(
        'this.state.containerClassName:',
        containerClassName,
      );
    } else {
      await this.setStateAsync({ containerClassName: 'subNavBarRelative' });
      const { containerClassName } = this.state;
      console.log(
        'this.state.containerClassName:',
        containerClassName,
      );
    }
  }

  render() {
    const {
      containerClassName,
    } = this.state;
    const { media, category, title } = this.props;
    let subNavMenu;
    if (title === '') {
      subNavMenu = (
        <Ul>
          <Li>{media}</Li>
        </Ul>
      );
    } else {
      subNavMenu = (
        <Ul>
          <Li>{media}</Li>
          {' '}
          <Separator>{'>'}</Separator>
          {' '}
          <Li>{category}</Li>
          {' '}
          <Separator>{'>'}</Separator>
          {' '}
          <Li style={{ color: '#fff', fontWeight: '900' }}>{title}</Li>
        </Ul>
      );
    }
    return (
      <SubNavigatorBar className={containerClassName}>
        <div className="container">
          <div className="row">
            <div className="col-12" />
            {subNavMenu}
          </div>
        </div>
      </SubNavigatorBar>
    );
  }
}
