import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { ArticleList, Title } from '../components/Styled'
const RootIndex = () => {
  const data = useStaticQuery(graphql` query HomeQuery {
    allContentfulPage{
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

  return (
    <Layout seo={{ title:"index"}}>
      {/* { <pre>{JSON.stringify(data, null, 4)}</pre>}       */}
      <Helmet title={"siteTitle"} />
      <div className="wrapper">
        <Title>Recent articles</Title>
        <ArticleList>
          { data.allContentfulPage.edges.map((item: any) => <li key={item.node.slug}>
              <Link to={`/tooltip/${item.node.slug}`}>{item.node.title}</Link>
            </li>
            )}
        </ArticleList>
      </div> 
    </Layout>
  )
}

export default RootIndex

