import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWhite = props => {
    const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    return <Img
        fixed={image.childImageSharp.fixed}
        alt="Logo White" />
}

export default LogoWhite;