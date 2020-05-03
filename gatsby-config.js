module.exports = {
  siteMetadata: {
    title: `Asokumar Gurusamy`,
    description: `A full stack web application using youtube data api and built on gatsby using React Hooks and Context API`,
    author: `Asokumar Gurusamy`,
    keywords: ['agurusamy', 'Ashok Kumar', 'Asokumar Gurusamy', 'Ashok G', 'Ashok Gurusamy', 'serverless netlify', 'netlify-lambda']
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `agurusamy-youtube-app`,
        short_name: `agurusamy-yt`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/leaf.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
