import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import SchemaOrg from './schema';

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
        };
      };
    };
  };
}

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  image?: {
    src: string;
    height: number;
    width: number;
  };
  blogPost?: Post;
}

const SEO: React.FC<Props> = ({
  description = '',
  lang = 'en',
  meta = [],
  image: metaImage,
  title,
  blogPost,
}) => {
  const { site, logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "riccardo-sirigu.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 960)
          resize(width: 960) {
            src
            width
            height
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          organization {
            name
            url
          }
          social {
            facebook
            twitter
          }
        }
      }
    }
  `);

  const siteMetadata = site.siteMetadata;

  const logoData = logo.childImageSharp.resize;
  const logoUrl = `${siteMetadata.siteUrl}${logoData.src}`;
  const metaDescription = description || siteMetadata.description;
  
  // Priority: blogPost.cover > metaImage > logo
  let imageUrl = logoUrl;
  let imageWidth = logoData.width;
  let imageHeight = logoData.height;
  
  // blogPost cover (gatsbyImageData fallback)
  const blogCover =
    blogPost?.frontmatter.cover?.childImageSharp?.gatsbyImageData?.images?.fallback;
  
  if (blogCover?.src) {
    imageUrl = `${siteMetadata.siteUrl}${blogCover.src}`;
    imageWidth = blogCover.width ?? 1200; // fallback width if undefined
    imageHeight = blogCover.height ?? 630; // fallback height if undefined
  } else if (metaImage && metaImage.src) {
    imageUrl = `${siteMetadata.siteUrl}${metaImage.src}`;
    imageWidth = metaImage.width;
    imageHeight = metaImage.height;
  }


  const url = blogPost
    ? `${siteMetadata.siteUrl}${blogPost.fields.slug}`
    : siteMetadata.siteUrl;

  const datePublished = blogPost?.frontmatter.date
    ? new Date(blogPost.frontmatter.date).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const metaTags: Meta[] = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: imageUrl,
    },
    {
      property: 'og:image:width',
      content: imageWidth?.toString(),
    },
    {
      property: 'og:image:height',
      content: imageHeight?.toString(),
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
    {
      name: 'twitter:image',
      content: imageUrl,
    },
  ];

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={[...metaTags, ...meta]}
      />
      <SchemaOrg
        author={siteMetadata.author}
        siteUrl={siteMetadata.siteUrl}
        datePublished={datePublished}
        defaultTitle={title}
        description={metaDescription}
        image={imageUrl}
        isBlogPost={!!blogPost}
        organization={{
          name: siteMetadata.organization.name,
          logo: logoUrl,
          url: siteMetadata.organization.url,
        }}
        title={title}
        url={url}
      />
    </>
  );
};

export default SEO;
