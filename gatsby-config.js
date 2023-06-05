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
  ],
}
