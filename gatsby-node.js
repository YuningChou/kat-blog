const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("src/templates/blogTemplate.tsx");

  return graphql(`
    {
      allMarkdownRemark {
        group {
          tag: fieldValue
          totalCount
        }
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
    }
  }
  `).then(res => {
    if (res.errors) {
      return  Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
};