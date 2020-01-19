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

import RecentActivities from './section/profile/RecentActivities';

import * as UserActions from '../store/actions/user/user';

const Profile = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [emailState, setEmailState] = useState('');
  const [quoteState, setQuoteState] = useState('');
  const [githubState, setGithubState] = useState('');
  const [linkedinState, setLinkedinState] = useState('');
  const [twitterState, setTwitterState] = useState('');
  const [editable, setEditable] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(user.data)) {
      const {
        email,
        quote,
        socialMedia,
      } = user.data;
      console.log('email effect:', email);
      console.log('quote effect:', quote);
      setEmailState(email);
      setQuoteState(quote);
      setGithubState(socialMedia.github);
      setLinkedinState(socialMedia.linkedin);
      setTwitterState(socialMedia.twitter);
    }
  }, [user.data]);

  useEffect(() => {
    console.log('is updated:', updated);
    if (updated) {
      // dispatch(UserActions.refreshUserData(user.data._id));
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

  const handleGithub = (e) => {
    setGithubState(e.target.value);
  };

  const handleLinkedin = (e) => {
    setLinkedinState(e.target.value);
  };

  const handleTwitter = (e) => {
    setTwitterState(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateObj = {
      userId: user.data._id,
    };

    updateObj.email = emailState;
    updateObj.quote = quoteState;
    updateObj.github = githubState;
    updateObj.linkedin = linkedinState;
    updateObj.twitter = twitterState;

    dispatch(UserActions.updateUserInfo(updateObj));
    setUpdated(true);
  };

  let UserImageDiv;
  let ProfileCoverImage;
  let EmailInput;
  let Submit;
  let Quote;
  let GithubInput;
  let LinkedinInput;
  let TwitterInput;
  let displayName = '';
  let Activities;


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
    Activities = (
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
      Activities = (
        <>
          <RecentActivities
            activities={user.data.posts}
            authorPicture={profileImage.url}
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
        GithubInput = (
          <>
            <Input
              id="github-profile"
              name="github-profile"
              type="github-profile"
              value={githubState}
              onChange={handleGithub}
            />
          </>
        );
        LinkedinInput = (
          <>
            <Input
              id="linkedin-profile"
              name="linkedin-profile"
              type="linkedin-profile"
              value={linkedinState}
              onChange={handleLinkedin}
            />
          </>
        );
        TwitterInput = (
          <>
            <Input
              id="twitter-profile"
              name="twitter-profile"
              type="twitter-profile"
              value={twitterState}
              onChange={handleTwitter}
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
        GithubInput = (
          <>
            <Input
              id="github-profile"
              name="github-profile"
              type="github-profile"
              value={githubState}
              onChange={handleGithub}
              disabled
            />
          </>
        );
        LinkedinInput = (
          <>
            <Input
              id="linkedin-profile"
              name="linkedin-profile"
              type="linkedin-profile"
              value={linkedinState}
              onChange={handleLinkedin}
              disabled
            />
          </>
        );
        TwitterInput = (
          <>
            <Input
              id="twitter-profile"
              name="twitter-profile"
              type="twitter-profile"
              value={twitterState}
              onChange={handleTwitter}
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
                <Label>
                  Github Profile
                </Label>
                {GithubInput}
                <Label>
                  Linked-in Profile
                </Label>
                {LinkedinInput}
                <Label>
                  Twitter Profile
                </Label>
                {TwitterInput}
                {Submit}
              </form>
            </Wrapper>
          </div>
          {Activities}
        </div>
      </div>
    </>
  );
};

export default Profile;
