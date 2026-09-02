import React from 'react';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import type { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Testimonial {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      cover: string;
    };
  };
}

interface Props {
  sectionTitle: SectionTitle;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<Props> = ({ sectionTitle, testimonials }) => {
  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Testimonials>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title }
            } = item.node;

            return (
              <Styled.Testimonial key={id}>
                <Styled.Image>
                  <img src={cover} alt={title} loading="lazy" decoding="async" />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
              </Styled.Testimonial>
            );
          })}
        </Carousel>
      </Styled.Testimonials>
    </Container>
  );
};

export default Testimonials;
