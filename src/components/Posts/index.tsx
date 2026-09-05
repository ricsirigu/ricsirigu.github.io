import React from 'react';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import type { SectionTitle } from 'helpers/definitions';
import { topicSlug } from 'lib/content';

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
      publishedDate: string;
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
  activeTopic?: string;
  introduction?: string;
  posts: Post[];
  sectionTitle: SectionTitle;
  topics?: Array<{ count: number; name: string; slug: string }>;
}

const Posts: React.FC<Props> = ({ activeTopic, introduction, posts, sectionTitle, topics = [] }) => {
  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} headingLevel="h1" center />
      {introduction && <Styled.Introduction>{introduction}</Styled.Introduction>}
      {topics.length > 0 && (
        <Styled.TopicNavigation aria-label="Blog topics">
          <span>Explore topics:</span>
          {topics.map((topic) => (
            <a
              key={topic.slug}
              href={`/blog/topics/${topic.slug}/`}
              aria-current={activeTopic === topic.slug ? 'page' : undefined}
            >
              {topic.name} ({topic.count})
            </a>
          ))}
        </Styled.TopicNavigation>
      )}
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, publishedDate, tags }
          } = item.node;

          return (
            <Styled.Post key={id}>
              <Styled.Card>
                <Styled.PostLink href={slug}>
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
                    <Styled.Date dateTime={publishedDate}>{date}</Styled.Date>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Description>{description}</Styled.Description>
                  </Styled.Content>
                </Styled.PostLink>
                <Styled.Tags aria-label={`Topics for ${title}`}>
                  {tags.map((item) =>
                    topics.some((topic) => topic.slug === topicSlug(item)) ? (
                      <Styled.TagLink key={item} href={`/blog/topics/${topicSlug(item)}/`}>
                        {item}
                      </Styled.TagLink>
                    ) : (
                      <Styled.Tag key={item}>{item}</Styled.Tag>
                    )
                  )}
                </Styled.Tags>
              </Styled.Card>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
