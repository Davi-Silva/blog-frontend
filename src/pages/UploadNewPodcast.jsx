import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _, { uniqueId } from 'lodash';

import {
  FaGoogle,
  FaSpotify,
  FaItunes,
} from 'react-icons/fa';


import filesize from 'filesize';
import slugify from 'slugify';
import { Editor } from '@tinymce/tinymce-react';

import api from '../services/api';

import UploadAudio from '../components/UI/admin/UploadFieldAudio.component';
import FileListAudio from '../components/UI/admin/FileListAudio.component';
import UploadCover from '../components/UI/admin/UploadFieldCover.component';
import FileListCover from '../components/UI/admin/FileListCover.component';

import {
  Input,
  Button,
  PodcastCoverUploaderPlaceholder,
  PodcastAudioFileUploaderPlaceholder,
  DivAside,
  ExternalEpisodesUrl,
} from '../styled-components/forms.styled-components';

import {
  UploadedOn,
} from '../styled-components/podcast.styled-components';

import * as UploadPodcastAction from '../store/actions/podcasts/uploadPodcast';

const UploadNewPodcast = (props) => {
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [description, setDescription] = useState('');
  const [googleEpisodeUrl, setGoogleEpisodeUrl] = useState('');
  const [spotifyEpisodeUrl, setSpotifyEpisodeUrl] = useState('');
  const [itunesEpisodeUrl, setItunesEpisodeUrl] = useState('');
  const [uploaded, setUploaded] = useState(null);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);

  const userInfo = useSelector((state) => state.user.data);
  const uploadedCover = useSelector((state) => state.uploadedPodcast.cover.data);
  const uploadedAudioFile = useSelector((state) => state.uploadedPodcast.audioFile.data);
  const dispatch = useDispatch();

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'blog',
      title,
    };
    const response = await fetch('http://localhost:5000/admin/blog/set/global-variable', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyRequest),
    });
    return response;
  };

  const verifySlug = async () => {
    const response = await fetch(
      `http://localhost:5000/admin/blog/validation/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  };

  const uploadPodcast = async (podcast) => {
    const response = await fetch(
      'http://localhost:5000/podcasts/upload',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(podcast),
      },
    );
    const data = await response.json();
    return data;
  };

  const disabledSubmitButton = () => {
    console.log('category:', category);
    console.log('title:', title);
    console.log('tags:', tags);
    console.log('description:', description);
    console.log('uploadedCover:', uploadedCover);
    console.log('uploadedAudioFile:', uploadedAudioFile);

    if (category !== ''
      && title !== ''
      && tags !== ''
      && description !== ''
      && !_.isEmpty(uploadedCover)
      && uploadedCover.uploaded
      && !_.isEmpty(uploadedAudioFile)
      && uploadedAudioFile.uploaded) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  const changeSlugFromTitle = () => {
    const lowerCaseTitle = title.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const handleEnableCoverUploader = () => {
    if (title.length > 0) {
      setTimeout(() => {
        setEnableCoverUploader(true);
      }, 0);
    } else if (title.length === 0 || title === '') {
      setTimeout(() => {
        setEnableCoverUploader(false);
      }, 0);
    }
  };

  const onChangeTitle = (e) => {
    if (_.isEmpty(uploadedCover) && _.isEmpty(uploadedAudioFile)) {
      if (title.length <= 100) {
        setTitle(e.target.value);
      } else {
        setTitle(title.substring(0, title.length - 1));
      }

      setTimeout(() => {
        changeSlugFromTitle(title);
        handleEnableCoverUploader();
        disabledSubmitButton();
      }, 0);
    }
  };


  const onChangeCategory = (e) => {
    setCategory(e.target.value.replace(/^\w/, (c) => c.toUpperCase()));
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };


  const onChangeGoogleEpisodeUrl = (e) => {
    setGoogleEpisodeUrl(e.target.value);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const onChangeSpotifyEpisodeUrl = (e) => {
    setSpotifyEpisodeUrl(e.target.value);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const onChangeItunesEpisodeUrl = (e) => {
    setItunesEpisodeUrl(e.target.value);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const handleEditorChange = async (e) => {
    setDescription(e.target.getContent());
  };

  const tagsToArray = () => {
    const tempTags = tags.split(', ');
    setTagsArray(tempTags);
  };

  const onChangeTags = (e) => {
    setTags(e.target.value.toLowerCase());
    setTimeout(() => {
      tagsToArray();
    }, 0);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    disabledSubmitButton();
    const {
      History,
    } = props;
    if (allFieldsFilled) {
      const podcastInfo = {
        isSlugValid,
        slug,
        category,
        title,
        description,
        googleEpisodeUrl,
        spotifyEpisodeUrl,
        itunesEpisodeUrl,
        tags: tagsArray,
        cover: uploadedCover.id,
        audioFile: uploadedAudioFile.id,
      };
      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await uploadPodcast(podcastInfo);
        setUploaded(res.uploaded);
        History.push('/podcasts');
      } else {
        console.log('Slug is invalid');
        setIsSlugValid(false);
      }
    } else {
      setWarning(true);
    }
  };

  const handleDeleteCover = async (id) => {
    await api.delete(`/podcasts/delete/cover/${id}`);
    dispatch(UploadPodcastAction.deleteUploadedCover());
  };

  const handleDeleteAudioFile = async (id) => {
    await api.delete(`/podcasts/delete/audio/${id}`);
    dispatch(UploadPodcastAction.deleteUploadedAudioFile());
  };

  useEffect(() => {
    setGlobalVariable();
  }, [title, uploaded]);

  useEffect(() => () => {
    URL.revokeObjectURL(uploadedCover.preview);
    handleDeleteCover(uploadedCover.id);
  }, []);

  const updateFileCover = (id, data) => {
    dispatch(UploadPodcastAction.updateUploadCoverProcess(data));
    disabledSubmitButton();
  };

  const handleUpdateProgress = (progress) => {
    dispatch(UploadPodcastAction.updateUploadCoverProcess(progress));
    disabledSubmitButton();
  };

  const updateAudioFile = (id, data) => {
    dispatch(UploadPodcastAction.updateUploadAudioFileProcess(data));
    disabledSubmitButton();
  };

  const handleUpdateAudioFileProgress = (progress) => {
    dispatch(UploadPodcastAction.updateUploadAudioFileProcess(progress));
    disabledSubmitButton();
  };

  const processUploadCover = (uploadedCoversParam) => {
    const data = new FormData();

    data.append('file', uploadedCoversParam.file, uploadedCoversParam.name);

    api.post('/podcasts/upload/cover', data, {
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

        handleUpdateProgress(progress);
        disabledSubmitButton();
      },
    })
      .then((response) => {
        dispatch(UploadPodcastAction.finishUploadCoverProcess({
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        }));
        disabledSubmitButton();
      })
      .catch(() => {
        updateFileCover(uploadedCoversParam.id, {
          error: true,
        });
      });
  };

  const processUploadAudioFile = (uploadedAudioFileParam) => {
    const data = new FormData();

    data.append('file', uploadedAudioFileParam.file, uploadedAudioFileParam.name);

    api.post('/podcasts/upload/audio', data, {
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

        handleUpdateAudioFileProgress(progress);
        disabledSubmitButton();
      },
    })
      .then((response) => {
        dispatch(UploadPodcastAction.finishUploadAudioFileProcess({
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        }));
        disabledSubmitButton();
      })
      .catch(() => {
        updateAudioFile(uploadedAudioFileParam.id, {
          error: true,
        });
      });
  };

  const handleUploadCover = async (files) => {
    const uploadedCoversObj = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    dispatch(UploadPodcastAction.initialUploadCoverProcess(uploadedCoversObj[0]));

    uploadedCoversObj.forEach(processUploadCover);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const handleUploadAudioFile = async (files) => {
    const uploadedCoversObj = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    dispatch(UploadPodcastAction.initialUploadAudioFileProcess(uploadedCoversObj[0]));

    uploadedCoversObj.forEach(processUploadAudioFile);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  let coverUploader;
  let audioFileUploader;

  if (enableCoverUploader) {
    coverUploader = (
      <>
        <UploadCover onUpload={handleUploadCover} />
        {!_.isEmpty(uploadedCover) && (
        <FileListCover
          file={uploadedCover}
          onDelete={handleDeleteCover}
        />
        )}
      </>
    );
    audioFileUploader = (
      <>
        <UploadAudio onUpload={handleUploadAudioFile} />
        {!_.isEmpty(uploadedAudioFile) && (
        <FileListAudio
          file={uploadedAudioFile}
          onDelete={handleDeleteAudioFile}
        />
        )}
      </>
    );
  } else {
    coverUploader = (
      <>
        <PodcastCoverUploaderPlaceholder>
          <p>
            Give this podcast a
            {' '}
            <strong>Title </strong>
            {' '}
            before uploading a cover
          </p>
        </PodcastCoverUploaderPlaceholder>
      </>
    );
    audioFileUploader = (
      <>
        <PodcastAudioFileUploaderPlaceholder>
          <p>
            Give this podcast a
            {' '}
            <strong>Title </strong>
            {' '}
            before uploading a audio file
          </p>
        </PodcastAudioFileUploaderPlaceholder>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit} method="POST">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <aside style={{ marginTop: '20px', position: 'sticky', top: '57px' }}>
                <DivAside>
                  {coverUploader}
                </DivAside>
              </aside>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <main style={{ marginTop: '20px' }}>
                <UploadedOn>
                    Uploaded on&nbsp;
                  <span style={{ color: '#333', fontWeight: '700' }}>Date</span>
                </UploadedOn>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title..."
                  value={title}
                  autoComplete="off"
                  style={{
                    color: '#333',
                    fontSize: '23px',
                    fontWeight: '900',
                    width: '100%',
                  }}
                  onChange={onChangeTitle}
                  required
                />
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category..."
                  value={category}
                  autoComplete="off"
                  style={{
                    color: '#999',
                    fontSize: '16px',
                    fontWeight: '100',
                    margin: '10px 0',
                    width: '100%',
                  }}
                  onChange={onChangeCategory}
                  required
                />
                <div>
                  {audioFileUploader}
                </div>
                <div style={{ margin: '50px 0px 20px 0px' }}>
                  <Editor
                    apiKey="z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658"
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                      ],
                      toolbar:
                          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                    }}
                    onChange={handleEditorChange}
                  />
                </div>
                <ExternalEpisodesUrl>
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <FaGoogle />
                        </li>
                        <li>
                          <Input
                            type="text"
                            id="external-episode-url-google-podcasts"
                            name="external-episode-url-google-podcasts"
                            placeholder="Spotify episode url..."
                            value={googleEpisodeUrl}
                            autoComplete="off"
                            style={{
                              color: '#333',
                              fontSize: '16px',
                              fontWeight: '100',
                              margin: '10px 0',
                              width: '100%',
                            }}
                            onChange={onChangeGoogleEpisodeUrl}
                          />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <FaSpotify />
                        </li>
                        <li>
                          <Input
                            type="text"
                            id="external-episode-url-spotify-podcasts"
                            name="external-episode-url-spotify-podcasts"
                            placeholder="Spotify Podcasts episode url..."
                            value={spotifyEpisodeUrl}
                            autoComplete="off"
                            style={{
                              color: '#333',
                              fontSize: '16px',
                              fontWeight: '100',
                              margin: '10px 0',
                              width: '100%',
                            }}
                            onChange={onChangeSpotifyEpisodeUrl}
                          />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <FaItunes />
                        </li>
                        <li>
                          <Input
                            type="text"
                            id="external-episode-url-apple-podcasts"
                            name="external-episode-url-apple-podcasts"
                            placeholder="iTunes episode url..."
                            value={itunesEpisodeUrl}
                            autoComplete="off"
                            style={{
                              color: '#333',
                              fontSize: '16px',
                              fontWeight: '100',
                              margin: '10px 0',
                              width: '100%',
                            }}
                            onChange={onChangeItunesEpisodeUrl}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </ExternalEpisodesUrl>
                <ul
                  style={{ display: 'inline' }}
                >
                  <li style={{ display: 'inline' }}>
                    <p style={{
                      marginBottom: '0px', marginTop: '0px', position: 'absolute', color: '#333',
                    }}
                    >
                      Tags:
                    </p>
                  </li>
                  <li style={{ display: 'inline', marginLeft: '45px', marginTop: '-20px' }}>
                    <Input
                      type="text"
                      id="tags"
                      name="tags"
                      value={tags}
                      autoComplete="off"
                      style={{
                        color: '#333',
                        fontSize: '16px',
                        fontWeight: '100',
                      }}
                      onChange={onChangeTags}
                      required
                    />
                  </li>
                </ul>
              </main>
              <Button disabled={!allFieldsFilled}>Upload</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

UploadNewPodcast.propTypes = {
  History: PropTypes.shape().isRequired,
};

export default UploadNewPodcast;
