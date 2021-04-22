import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import {getSrc} from 'gatsby-plugin-image'
import SchemaOrg from './schema';
import * as moment from 'moment'

type Meta =
  | {
    name: string;
    content: any;
  }
  | {
    property: string;
    content: any;
  };

interface Post {
  html: React.ReactNode;
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    cover: {
      childImageSharp: {
        resize: {
          src: string;
          width: number;
          height: number;
        }
      };
    };
  };
}

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  image: {
    src: string,
    height: number,
    width: number,
  };
  blogPost: Post;
}

const SEO: React.FC<Props> = ({ description, lang, meta, image: metaImage, title, blogPost }) => {

  const { site, logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "riccardo-sirigu.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 960)
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            organization {
              name, 
              url,
            }
            social {
              facebook,
              twitter
            }
          }
        }
      }
    `
  );

  const logoUrl = `${site.siteMetadata.siteUrl}${getSrc(logo.childImageSharp.gatsbyImageData)}`
  const metaDescription = description || site.siteMetadata.description;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : logoUrl
  const url = blogPost ? `${site.siteMetadata.siteUrl}${blogPost.fields.slug}` : site.siteMetadata.siteUrl
  const datePublished = moment().format("YYYY-MM-DD")


  return (
    <>
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: metaDescription
          }
        ]
          .concat(
            metaImage
              ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
              : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
          ).concat(meta!)}
      />
      <SchemaOrg
        author={site.siteMetadata.author}
        siteUrl={site.siteMetadata.siteUrl}
        datePublished={datePublished}
        defaultTitle={title}
        description={metaDescription}
        image={image}
        isBlogPost={blogPost !== null}
        organization={{name: site.siteMetadata.organization.name, logo: logoUrl, url: site.siteMetadata.siteUrl}}
        title={title}
        url={url}
      />
    </>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [] as Meta[],
  description: ``
};

export default SEO;
