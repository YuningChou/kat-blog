module.exports = {
  siteMetadata: {
    title: 'Kat.Chou',
    description: 'Kat.Chou',
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-antd`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true,
            }
          },
        ],
      },
    },
  ],
}
