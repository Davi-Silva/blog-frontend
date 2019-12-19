import React, { Component } from 'react';
import {
  FaGithub
} from 'react-icons/fa';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      icon: '',
      backgroundColor: '',
      providerName: '',
      endpoint: '',
    };
  }

  componentDidMount() {
    const {
      icon,
      backgroundColor,
      providerName,
      endpoint,
    } = this.props;
    this.setState({
      icon,
      backgroundColor,
      providerName,
      endpoint,
    });
  }

  render() {
    const {
      endpoint,
      backgroundColor,
      icon,
      providerName,
    } = this.state;
    return (
      <>
        <a
          href={endpoint}
          style={{
            color: '#fff',
            backgroundColor: `${backgroundColor}`,
            padding: '12px 30px',
            display: 'inline-block',
            width: '100%',
            textAlign: 'center',
            borderRadius: '3px',
            fontSize: '14px',
          }}
        >
          <div className="row">
            <div className="col-2 p-0">
              <FaGithub />
            </div>
            <div className="col-10 p-0">
              <span style={{ textDecoration: 'none' }}>
                Login with
                {' '}
                {providerName}
              </span>
            </div>
          </div>
        </a>
      </>
    );
  }
}
