/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  FaEdit,
} from 'react-icons/fa';

import _ from 'lodash';

import {
  Cover,
  Wrapper,
  ProfileImage,
  Label,
  DisplayName,
  Input,
  TextArea,
  SubmitButton,
  LoadingProfileImage,
  EditableButton,
} from '../styled-components/profile.styled.components';

import * as UserActions from '../store/actions/user/user';

const Profile = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [emailState, setEmailState] = useState('');
  const [quoteState, setQuoteState] = useState('');
  const [editable, setEditable] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(user.data)) {
      const {
        email,
        quote,
      } = user.data;
      console.log('email effect:', email);
      console.log('quote effect:', quote);
      setEmailState(email);
      setQuoteState(quote);
    }
  }, [user.data]);

  useEffect(() => {
    console.log('is updated:', updated);
    if (updated) {
      dispatch(UserActions.refreshUserData(user.data._id));
    }
  }, [updated]);

  const handleEditable = () => {
    setEditable(!editable);
  };

  const handleEmail = (e) => {
    setEmailState(e.target.value);
  };

  const handleQuote = (e) => {
    if (quoteState.length <= 100) {
      setQuoteState(e.target.value);
    } else {
      setQuoteState(quoteState.substring(0, quoteState.length - 1));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateObj = {
      userId: user.data._id,
      // email: emailState,
      quote: quoteState,
    };
    console.log('updateObj:', updateObj);
    dispatch(UserActions.updateUserInfo(updateObj));
    setUpdated(true);
  };

  let UserImageDiv;
  let ProfileCoverImage;
  let EmailInput;
  let Submit;
  let Quote;
  let displayName = '';


  if (user.loading) {
    UserImageDiv = (
      <>
        <LoadingProfileImage
          style={{
            backgroundColor: '#eee',
          }}
        />
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundColor: '#eee',
          }}
        />
      </>
    );
    EmailInput = (
      <>
      </>
    );
  } else if (user.fetched) {
    if (!_.isEmpty(user.data)) {
      const {
        name, profileImage, email, quote,
      } = user.data;
      displayName = name;
      UserImageDiv = (
        <>
          <ProfileImage src={profileImage.url} alt="Profile Placeholder" />
        </>
      );
      ProfileCoverImage = (
        <>
          <Cover
            alt="Profile Placeholder"
            style={{
              backgroundImage: `url(${profileImage.url})`,
            }}
          />
        </>
      );
      if (editable) {
        EmailInput = (
          <>
            <Input
              id="email"
              name="email"
              value={emailState}
              onChange={handleEmail}
            />
          </>
        );
        Quote = (
          <>
            <TextArea
              id="quote"
              name="quote"
              value={quoteState}
              onChange={handleQuote}
            />
          </>
        );
        Submit = (
          <>
            <SubmitButton>
              Update
            </SubmitButton>
          </>
        );
      } else {
        EmailInput = (
          <>
            <Input
              id="email"
              name="email"
              type="email"
              value={emailState}
              onChange={handleEmail}
              disabled
            />
          </>
        );
        Quote = (
          <>
            <TextArea
              value={quoteState}
              onChange={handleQuote}
              disabled
            />
          </>
        );
        Submit = (
          <>
          </>
        );
      }
    } else {
      const {
        history,
      } = props;
      history.push('/login');
    }
  }

  return (
    <>
      {ProfileCoverImage}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            {UserImageDiv}
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <Wrapper>
              <EditableButton
                type="button"
                onClick={handleEditable}
              >
                <FaEdit />
              </EditableButton>
              <form onSubmit={onSubmit}>
                <Label>Name</Label>
                <DisplayName>{displayName}</DisplayName>
                <Label>
                  Email
                </Label>
                {EmailInput}
                <Label>
                  Quote
                </Label>
                {Quote}
                {Submit}
              </form>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
