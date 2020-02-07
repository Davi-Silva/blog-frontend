/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import _, { uniqueId } from 'lodash';
import filesize from 'filesize';
import slugify from 'slugify';
import { Editor } from '@tinymce/tinymce-react';

import api from '../services/api';

import UploadCover from '../components/UI/admin/UploadFieldBlogPostCover.component';
import FileListCover from '../components/UI/admin/FileListBlogPostCover.component';

import * as UploadBlogPostCoverAction from '../store/actions/blog/publishBlogPost';

import {
  Input,
  Select,
  Button,
  Warning,
  BlogPostCoverUploaderPlaceholder,
} from '../styled-components/forms.styled-components';


const PublishBlogPost = (props) => {
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [type, setType] = useState('');
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [content, setContent] = useState('');
  const [uploaded, setUploaded] = useState(null);
  const [uploadedCovers, setUploadedCovers] = useState([]);
  const [coverUploaded, setCoverUploaded] = useState(false);
  const [author, setAuthor] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);

  const publishCover = useSelector((state) => state.publishBlogPostCover.data);
  const dispatch = useDispatch();

  const handleGetCover = async () => {
    const responseCover = await api.get(`/blog/cover/${title}`);
    // dispatch(UploadBlogPostCoverAction.updateUploadCoverProcess(responseCover.data));
    setUploadedCovers(responseCover.data.map((file) => ({
      id: file._id,
      name: file.name,
      readableSize: filesize(file.size),
      preview: file.url,
      uploaded: true,
      url: file.url,
    })));
  };

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
    // let data = await response.json();
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

  const appendPostToAuthor = async (userId, postsArray) => {
    const response = await fetch('http://localhost:5000/admin/user/post/to/author', {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        postsArray,
      }),
    });
    return response;
  };

  const disabledSubmitButton = () => {
    if (type !== 'Type'
      && type !== ''
      && category !== ''
      && title !== ''
      && tags !== ''
      && content !== ''
      && !_.isEmpty(publishCover)
      && publishCover.uploaded) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    handleGetCover();
  }, []);

  useEffect(() => {
    setGlobalVariable();
    if (uploaded) {
      const {
        history,
      } = props;
      history.push('/admin');
    }
  }, [title, uploaded]);

  useEffect(() => () => {
    URL.revokeObjectURL(publishCover.preview);
  }, []);


  const onChangeType = (e) => {
    setType(e.target.value);
    disabledSubmitButton();
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

  const changeSlugFromTitle = () => {
    const lowerCaseTitle = title.toLowerCase();
    const slugLower = slugify(lowerCaseTitle);
    setSlug(slugLower);
  };

  const onChangeTitle = (e) => {
    if (_.isEmpty(publishCover)) {
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

  const handleEditorChange = async (e) => {
    setContent(e.target.getContent());
  };


  const onChangeCategory = (e) => {
    setCategory(e.target.value.replace(/^\w/, (c) => c.toUpperCase()));
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
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

  const publishPost = async (podcast) => {
    const response = await fetch(
      'http://localhost:5000/admin/blog/publish',
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

  const onSubmit = async (e) => {
    e.preventDefault();
    disabledSubmitButton();
    const {
      History,
      userInfo,
    } = props;
    if (allFieldsFilled) {
      const postInfo = {
        isSlugValid,
        slug,
        type,
        category,
        title,
        content,
        tags: tagsArray,
        cover: publishCover.id,
        author: userInfo._id,
      };
      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await publishPost(postInfo);
        let userPostsArray = [];
        userPostsArray = userInfo.posts;
        userPostsArray.push(res);
        appendPostToAuthor(userInfo._id, userPostsArray);
        setUploaded(res.uploaded);
        History.push('/blog');
      } else {
        console.log('meh');
      }
    } else {
      setWarning(true);
    }
  };


  const updateFileCover = (id, data) => {
    dispatch(UploadBlogPostCoverAction.updateUploadCoverProcess(data));
    disabledSubmitButton();
  };

  const handleUpdateProgress = (progress) => {
    dispatch(UploadBlogPostCoverAction.updateUploadCoverProcess(progress));
    disabledSubmitButton();
  };

  const processUploadCover = (uploadedCoversParam) => {
    const data = new FormData();

    data.append('file', uploadedCoversParam.file, uploadedCoversParam.name);

    api
      .post('/admin/blog/publish/cover', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

          handleUpdateProgress(progress);
          disabledSubmitButton();
        },
      })
      .then((response) => {
        dispatch(UploadBlogPostCoverAction.finishUploadCoverProcess({
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        }));
        setCoverUploaded(true);
        disabledSubmitButton();
      })
      .catch(() => {
        updateFileCover(uploadedCoversParam.id, {
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

    dispatch(UploadBlogPostCoverAction.initialUploadCoverProcess(uploadedCoversObj[0]));

    uploadedCoversObj.forEach(processUploadCover);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };


  const handleDeleteCover = async (id) => {
    await api.delete(`/admin/blog/delete/cover/${id}`);
    setUploadedCovers(publishCover.filter((file) => file.id !== id));
  };


  let coverUploader;
  let warningDiv;

  if (enableCoverUploader) {
    coverUploader = (
      <>
        <UploadCover onUpload={handleUploadCover} />
        {!_.isEmpty(publishCover) && (
        <FileListCover
          files={publishCover}
          onDelete={handleDeleteCover}
        />
        )}
      </>
    );
  } else {
    coverUploader = (
      <>
        <BlogPostCoverUploaderPlaceholder>
          <p>
            Give this blog post a
            {' '}
            <strong>Title</strong>
            {' '}
            before uploading a cover
          </p>
        </BlogPostCoverUploaderPlaceholder>
      </>
    );
  }
  if (warning) {
    warningDiv = (
      <>
        <Warning>
          All fileds must be filled
        </Warning>
      </>
    );
  } else {
    warningDiv = (
      <>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ height: '300px', width: '100%' }}>
              {coverUploader}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form style={{ marginTop: '25px' }} onSubmit={onSubmit}>
              <Select
                name="type"
                id="type"
                onChange={onChangeType}
              >
                <option value="Type">Type</option>
                <option value="Article">Article</option>
                <option value="News">News</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Video">Video</option>
              </Select>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={title}
                autoComplete="off"
                style={{
                  color: '#333',
                  fontSize: '26px',
                  fontWeight: '900',
                  width: '100%',
                  marginBottom: '25px',
                }}
                onChange={onChangeTitle}
                onInput={handleEnableCoverUploader}
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
              <div
                style={{
                  marginBottom: '20px',
                }}
              >
                <Editor
                  apiKey="z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658"
                  init={{
                    extended_valid_elements: 'script[src|async|defer|type|charset]',
                    height: 500,
                    menubar: 'tools',
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                      'codesample code',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | codesample | code',
                  }}
                  onChange={handleEditorChange}
                />
              </div>
              <ul
                style={{
                  display: 'inline',
                }}
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
              {warningDiv}
              <Button>Publish</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishBlogPost;
