/* eslint-disable import/no-named-as-default */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, {
  // useContext,
  useState,
  useEffect,
  useRef,
} from 'react';

import { uniqueId } from 'lodash';
import filesize from 'filesize';
import slugify from 'slugify';
import { Editor } from '@tinymce/tinymce-react';

import api from '../services/api';

import UploadCover from '../components/UI/admin/UploadFieldBlogPostCover.component';
import FileListCover from '../components/UI/admin/FileListBlogPostCover.component';
import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  Input,
  Button,
  Warning,
  BlogPostCoverUploaderPlaceholder,
} from '../styled-components/forms.styled-components';

const PublishBlogPost = (props) => {
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [slugPost, setSlugPost] = useState('');
  const [titlePost, setTitlePost] = useState('');
  const [categoryPost, setCategoryPost] = useState('');
  const [tagsPost, setTagsPost] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [contentPost, setContentPost] = useState('');
  const [uploaded, setUploaded] = useState(null);
  const [uploadedCoversPost, setUploadedCoversPost] = useState([]);
  const [coverUploaded, setCoverUploaded] = useState(false);
  // const [author, setAuthor] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [enableCoverUploader, setEnableCoverUploader] = useState(false);
  const [warning, setWarning] = useState(false);

  const mounted = useRef();

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'blog',
      titlePost,
    };
    const response = fetch(
      'http://localhost:5000/admin/blog/set/global-variable',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest),
      },
    );
    // let data = await response.json();
    return response;
  };

  useEffect(() => {
    const getResponseCover = async () => {
      const responseCover = await api.get(`/blog/cover/${titlePost}`);
      setUploadedCoversPost([
        responseCover.data.map((file) => ({
          id: file._id,
          name: file.name,
          readableSize: filesize(file.size),
          preview: file.url,
          uploaded: true,
          url: file.url,
        })),
      ]);
    };
    getResponseCover();
  }, []);

  useEffect(() => {
    const setGlobal = async () => {
      const res = await setGlobalVariable();
      console.log('res:', res);
      if (uploaded) {
        props.history.push('/admin');
      }
    };
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setGlobal();
    }
  });

  const changeSlugFromTitle = async () => {
    const lowerCaseTitle = titlePost.toLowerCase();
    const slug = slugify(lowerCaseTitle);
    setSlugPost(slug);
  };

  const EnableCoverUploader = async (title) => {
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

  const disabledSubmitButton = () => {
    if (
      categoryPost !== ''
      && titlePost !== ''
      && tagsPost !== ''
      && contentPost !== ''
      && uploadedCoversPost.length > 0
      && coverUploaded
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  const onChangeTitle = async (e) => {
    setTitlePost(e.target.value);
    setTimeout(() => {
      changeSlugFromTitle(titlePost);
      EnableCoverUploader(titlePost);
      disabledSubmitButton();
    }, 0);
  };

  const handleEditorChange = async (e) => {
    setContentPost(e.target.getContent());
  };

  const onChangeCategory = async (e) => {
    setCategoryPost(e.target.value.replace(/^\w/, (c) => c.toUpperCase()));
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const tagsToArray = () => {
    const tempTags = tagsPost.split(', ');
    setTagsArray(tempTags);
  };

  const onChangeTags = async (e) => {
    setTagsPost(e.target.value.toLowerCase());
    setTimeout(() => {
      tagsToArray();
    }, 0);
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const verifySlug = async (slug) => {
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

  const publishPost = async (podcast) => {
    const response = await fetch('http://localhost:5000/admin/blog/publish', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(podcast),
    });
    const data = await response.json();
    return data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { History } = props;
    if (allFieldsFilled) {
      const postInfo = {
        isSlugValid,
        slug: slugPost,
        category: categoryPost,
        title: titlePost,
        content: contentPost,
        tags: tagsArray,
        cover: uploadedCoversPost[0].id,
        author: 'Davi Silva',
      };
      const isSlugValidRes = await verifySlug(slugPost);
      if (isSlugValidRes.valid) {
        const res = await publishPost(postInfo);
        setUploaded(res.uploaded);
        History.push('/blog');
      }
    } else {
      setWarning(true);
    }
  };

  const updateFileCover = (id, data) => {
    setUploadedCoversPost(
      uploadedCoversPost.map((uploadedCover) => (
        id === uploadedCover.id ? { ...uploadedCover, ...data } : uploadedCover
      )),
    );
  };

  const processUploadCover = () => {
    const data = new FormData();

    console.log('data blob:', data);
    console.log('uploadedCoversPost Processing:', uploadedCoversPost);
    data.append('file', uploadedCoversPost[0].file, uploadedCoversPost[0].name);

    api
      .post('', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

          updateFileCover(uploadedCoversPost.id, {
            progress,
          });
        },
      })
      .then((response) => {
        updateFileCover(uploadedCoversPost.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        });
        setCoverUploaded(true);
        disabledSubmitButton();
      })
      .catch(() => {
        updateFileCover(uploadedCoversPost.id, {
          error: true,
        });
      });
  };

  const handleUploadCover = (files) => {
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
    console.log('uploadedCoversObj:', uploadedCoversObj);

    setUploadedCoversPost(uploadedCoversPost.concat(uploadedCoversObj));

    uploadedCoversPost.forEach(processUploadCover());
    setTimeout(() => {
      disabledSubmitButton();
    }, 0);
  };

  const handleDeleteCover = async (id) => {
    await api.delete(`/admin/blog/delete/cover/${id}`);

    setUploadedCoversPost(uploadedCoversPost.filter((file) => file.id !== id));
  };

  // componentWillUnmount() {
  //   this.state.uploadedCoversPost.forEach(file =>
  //     URL.revokeObjectURL(file.preview)
  //   );
  // }

  let coverUploader;
  let warningDiv;

  if (enableCoverUploader) {
    coverUploader = (
      <>
        <UploadCover onUpload={handleUploadCover} />
        {!!uploadedCoversPost.length && (
          <FileListCover
            files={uploadedCoversPost}
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
        <Warning>All fileds must be filled</Warning>
      </>
    );
  } else {
    warningDiv = <></>;
  }

  return (
    <>
      <SubNavBar media="Blog" category="Publish" title={titlePost} />
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
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={titlePost}
                autoComplete="off"
                style={{
                  color: '#333',
                  fontSize: '26px',
                  fontWeight: '900',
                  width: '100%',
                  marginBottom: '25px',
                }}
                onChange={onChangeTitle}
                onInput={EnableCoverUploader}
                required
              />
              <Input
                type="text"
                id="category"
                name="category"
                placeholder="Category..."
                value={categoryPost}
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
                    extended_valid_elements:
                      'script[src|async|defer|type|charset]',
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
                  <p
                    style={{
                      marginBottom: '0px',
                      marginTop: '0px',
                      position: 'absolute',
                      color: '#333',
                    }}
                  >
                    Tags:
                  </p>
                </li>
                <li
                  style={{
                    display: 'inline',
                    marginLeft: '45px',
                    marginTop: '-20px',
                  }}
                >
                  <Input
                    type="text"
                    id="tags"
                    name="tags"
                    value={tagsPost}
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
