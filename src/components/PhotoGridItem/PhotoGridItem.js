import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {

  const baseSrc = src.replace('.jpg', '');

  const avifSet = [
    `${baseSrc}.avif 1x`,
    `${baseSrc}@2x.avif 2x`,
    `${baseSrc}@3x.avif 3x`,
  ].join(', ');
  const jpgSet = [
    `${baseSrc}.jpg 1x`,
    `${baseSrc}@2x.jpg 2x`,
    `${baseSrc}@3x.jpg 3x`,
  ].join(', ');


  return (
    <article>
      <Anchor href={`/photos/${id}`}>

        <picture>
          <source
            type="image/avif"
            srcSet={avifSet}
          ></source>
          <source
            type="image/jpg"
            srcSet={jpgSet}
          ></source>
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  `;

const Tag = styled.li`
  display: inline-block;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  margin-left: 8px;
  
  &:first-of-type {
    margin-left: 0;
  }
`;

export default PhotoGridItem;
