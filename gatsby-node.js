const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const tooltip = path.resolve('./src/templates/tooltip.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulTooltip {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulTooltip.edges
        posts.forEach((item) => {
          console.log(item.node.slug)
          createPage({
            path: `/tooltip/${item.node.slug}/`,
            component: tooltip,
            context: {
              slug: item.node.slug
            },
          })
        })
      })
    )
  })
}

