import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import {
  TagsUl,
  TagLi,
  Tag,
} from '../../../styled-components/components/post-tags.styled-components';

const Tags = ({ tagsArray }) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(tagsArray);
  }, []);

  return (
    <>
      <TagsUl>
        {
          tags.map((tag, key) => (
            <>
              <TagLi key={key}>
                <Tag to={`/blog/tags/${slugify(tag.toLowerCase())}`}>
                  {tag}
                </Tag>
              </TagLi>
            </>
          ))
        }
      </TagsUl>
    </>
  );
};

export default Tags;
