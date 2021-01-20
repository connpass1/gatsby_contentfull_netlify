import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { ArticleList, Title } from '../components/Styled'
const Blog  = () => { 
  return (
    <Layout seo={{ title: "blog" }}>
      blog
    </Layout>
  )
} 
export default Blog

