import React  from 'react'
import { Link } from 'gatsby'
import { GlobalCSS, Navigation } from './Styled'


  const Template: React.FC = (props) =>{
  
    return (
      <div className="wrapper">
        <GlobalCSS/>
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
        {props.children}
      </div>
    )
 
}

export default Template
