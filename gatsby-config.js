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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kat.Chou`,
        short_name: `Kat`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `/static/favicon.ico`
      },
    },
  ],
}
