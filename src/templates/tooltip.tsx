import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { MarkDown, TagList, Title } from '../components/Styled'
 

class Tooltip extends React.Component {
 
  render() {
    const tooltip = get(this.props, 'data.contentfulTooltip')
   // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <Helmet title={tooltip.title} />
        <Title>{tooltip.title}</Title>
          <Img
      className={"heroImage"}
      
      fluid={tooltip.image.fluid}
    /> *

        <MarkDown dangerouslySetInnerHTML={{
                __html: tooltip.body.childMarkdownRemark.html,
        }}
        />
        <TagList>{tooltip.tags.map((tag: string, key: string | number ) => <li key={key}>{tag }</li>)}</TagList>
         
      </Layout>
    )
  }
}

export default Tooltip

 export const pageQuery = graphql`
 query TooltipSlug($slug: String!) {  
  contentfulTooltip(slug: { eq: $slug }) {
    body {
      childMarkdownRemark {
        html
      }
    }
    title
    tags
    lang
    description {
      description
    }
    image {
      fluid {
        tracedSVG
      }
    }
 
}
}

 `
