module.exports = {
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    }
  ],
}
