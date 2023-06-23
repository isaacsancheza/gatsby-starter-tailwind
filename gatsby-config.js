module.exports = {
  siteMetadata: {
    title: `gatsby-starter-tailwind`,
    description: `A simple starter to get up and developing quickly with Gatsby`,
    siteUrl: `https://github.com/isaacsancheza/gatsby-starter-tailwind`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: `es-MX`,
        name: `gatsby-starter-tailwind`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            allow: '/',
            userAgent: '*', 
          },
        ]
      },
    },
  ],
}
