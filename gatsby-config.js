module.exports = {
  siteMetadata: {
    title: `My Third Mind`,
    description: `Randomized Prose`,
    author: `@frightlab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `mythirdmind`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://patrickmorrissey.com/feed/`,
        name: `PatrickMorrissey`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://www.kentuckytheater.com/feed/`,
        name: `KentuckyTheater`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
