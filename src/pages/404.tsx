import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import Layout from '../components/Layout'
import { Title } from '../components/Styled'
const ErrorPage = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "not_found.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const Image = () => data?.placeholderImage?.childImageSharp?.fluid ? <Img fluid={data.placeholderImage.childImageSharp.fluid} /> : <h1>error</h1>

  return (
    <Layout seo={{ title: "error 404" }}>
      <Title>error 404</Title>
      <Image />
      <Title>error 404</Title>
    </Layout>
  )
}
export default ErrorPage