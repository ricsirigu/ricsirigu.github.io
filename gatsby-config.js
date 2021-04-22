module.exports = {
  siteMetadata: {
    siteUrl: `https://www.riccardosirigu.com`,
    title: `Riccardo Sirigu`,
    description: `Riccardo Sirigu, Senior Software Engineer and Cybersecurity Consultant`,
    author: `Riccardo Sirigu`,
    organization: {
      name: `Riccardo Sirigu`,
      url: `https://www.riccardosirigu.com`,
    },
    social: {
      facebook: `https://www.facebook.com/riccardo.sirigu`,
      twitter:  `https://twitter.com/ricsirigu`,
    }
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              size: 24,
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                top: '5px',
                width: '25px'
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riccardo Sirigu personal website`,
        short_name: `Riccardo Sirigu`,
        start_url: `/`,
        background_color: `#81e6d9`,
        theme_color: `#81e6d9`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
