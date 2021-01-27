module.exports = {
  siteMetadata: {
    title: `Kat`,
    author: "Kat.Chou"
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-antd`,
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
