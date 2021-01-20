import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { MarkDown, TagList, Title } from '../components/Styled'
class PageLayout extends React.Component {
   render() {
    const page = get(this.props, 'data.contentfulPage')
   // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout>
        <Helmet title={ page.title} />
       {JSON.stringify( page)}
        <Title>{page.title}</Title>
        {page.blocks.map((block: any, key: any) => <div key={key}>           
          <MarkDown dangerouslySetInnerHTML={{
                __html:block.mrk.childMarkdownRemark.html,
        }}
          />
                <Img
      className={"heroImage"}      
      fluid={block.image.fluid}
        /> 
          </div>
          )}
            <TagList>{page.tags.map((tag: string, key: string | number ) => <li key={key}>{tag }</li>)}</TagList>         
      </Layout>
    )
  }
}

export default PageLayout

 export const pageQuery = graphql`
 query TooltipSlug($slug: String!) {  
  contentfulPage(slug: { eq: $slug }) {
    lang
    slug
    tags
    title
    description
    blocks {
      mrk {
        childMarkdownRemark {
          html
        }
      }
      image {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
 `