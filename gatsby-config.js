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
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.feedburner.com/selectism/rss`,
        name: `HighSnobiety`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.boingboing.net/boingboing/iBag`,
        name: `BoingBoing`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://aiweirdness.com/rss`,
        name: `AiWeirdness`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds2.feedburner.com/creativeapplicationsnet`,
        name: `CreativeApplications`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://www.entagma.com/feed/`,
        name: `Entagma`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://pitchfork.com/rss/news/`,
        name: `Pitchfork`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.stereogum.com/feed/`,
        name: `Stereogum`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.arstechnica.com/arstechnica/index/`,
        name: `ArsTechnica`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://www.fastcolabs.com/rss.xml`,
        name: `CoLabs`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feedproxy.google.com/TechCrunch`,
        name: `TechCrunch`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://tympanus.net/codrops/feed/`,
        name: `Codrops`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.feedburner.com/CssTricks`,
        name: `CssTricks`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
