import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/ui/Container';

import * as Styled from './styles';

export interface AuthorityLink {
  description: string;
  href: string;
  label: string;
  external?: boolean;
}

export interface AuthoritySection {
  bullets?: string[];
  paragraphs?: string[];
  title: string;
}

interface Props {
  breadcrumbs?: Array<{ href: string; label: string }>;
  currentPath: string;
  eyebrow: string;
  highlights?: AuthorityLink[];
  relatedLinks?: AuthorityLink[];
  sections: AuthoritySection[];
  summary: string;
  title: string;
}

const AuthorityPage: React.FC<Props> = ({
  breadcrumbs = [],
  currentPath,
  eyebrow,
  highlights = [],
  relatedLinks = [],
  sections,
  summary,
  title,
}) => (
  <Layout currentPath={currentPath}>
    <Container section>
      <Styled.Content>
        <Styled.Breadcrumbs aria-label="Breadcrumb">
          <a href="/">Home</a>
          {breadcrumbs.map((item) => (
            <React.Fragment key={item.href}>
              <span aria-hidden="true">/</span>
              <a href={item.href}>{item.label}</a>
            </React.Fragment>
          ))}
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </Styled.Breadcrumbs>

        <Styled.Header>
          <Styled.Eyebrow>{eyebrow}</Styled.Eyebrow>
          <h1>{title}</h1>
          <Styled.Summary>{summary}</Styled.Summary>
        </Styled.Header>

        {highlights.length > 0 && (
          <Styled.HighlightList aria-label="Independent references and selected proof">
            {highlights.map((highlight) => (
              <li key={highlight.href}>
                <a
                  href={highlight.href}
                  target={highlight.external ? '_blank' : undefined}
                  rel={highlight.external ? 'noreferrer noopener' : undefined}
                >
                  <strong>{highlight.label}</strong>
                  <span>{highlight.description}</span>
                </a>
              </li>
            ))}
          </Styled.HighlightList>
        )}

        <Styled.Body>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </Styled.Body>

        {relatedLinks.length > 0 && (
          <Styled.Related aria-labelledby="related-resources-title">
            <h2 id="related-resources-title">Related resources</h2>
            <Styled.RelatedGrid>
              {relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer noopener' : undefined}
                >
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </a>
              ))}
            </Styled.RelatedGrid>
          </Styled.Related>
        )}
      </Styled.Content>
    </Container>
  </Layout>
);

export default AuthorityPage;
