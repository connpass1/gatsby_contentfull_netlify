import React from 'react'
import { Link } from 'gatsby'
import { GlobalCSS, Navigation } from './Styled'
import { Helmet } from 'react-helmet'
export interface ISeo {
  title: string;
  lang?: string;
  description?: string;
}
const Layout: React.FC<{ seo: ISeo }> = ({ seo, children }) => {
  const { title, description, lang } = seo;
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og=type" content="website" />
        <meta name="twitter=card" content="summary" />
        {lang && <html lang={lang} />}
        {title && <meta property="og=title" content={title} />}
        {title && <meta property="og=title" content={title} />}
        {title && <meta name="twitter=title" content={title} />}
        {title && <title>{title}</title>}
        {description && <meta name="twitter=description" content={description} />}
        {description && <meta name="description" content={description} />}
        {description && <meta property="og=description" content={description} />}
      </Helmet>
      <GlobalCSS />
      <Navigation>
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </Navigation>
      {children}
    </div>
  )
}

export default Layout
