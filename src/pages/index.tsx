import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { ArticleList, Title } from '../components/Styled'
const RootIndex = () => {
  const data = useStaticQuery(graphql` query HomeQuery {
    allContentfulTooltip {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
  )

  const siteTitle = data.allContentfulTooltip
  
  return (
    <Layout >
      {/* <pre>{JSON.stringify(data, null, 4)}</pre>        */}
      {/* <Helmet title={siteTitle} />
      <div className="wrapper">
        <Title>Recent articles</Title>
        <ArticleList>
          {
            posts.map((item: any) => <li key={item.node.slug}>
              <Link to={`blog/${item.node.slug}`}>{item.node.title}</Link>
            </li>
            )}
        </ArticleList>

      </div> */}
    </Layout>
  )
}

export default RootIndex

