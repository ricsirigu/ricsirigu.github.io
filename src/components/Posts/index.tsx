import React from 'react';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import type { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        height: number;
        sizes: string;
        srcSet: string;
        url: string;
        webpSrcSet?: string;
        width: number;
      };
    };
  };
}

interface Props {
  posts: Post[];
  sectionTitle: SectionTitle;
}

const Posts: React.FC<Props> = ({ posts, sectionTitle }) => {
  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags }
          } = item.node;

          return (
            <Styled.Post key={id}>
              <a href={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    <Styled.Image>
                      <picture>
                        {cover.webpSrcSet && <source type="image/webp" srcSet={cover.webpSrcSet} sizes={cover.sizes} />}
                        <img
                          src={cover.url}
                          srcSet={cover.srcSet}
                          sizes={cover.sizes}
                          alt={title}
                          width={cover.width}
                          height={cover.height}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </a>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
