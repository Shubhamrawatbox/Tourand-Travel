import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import './image.css'

const Image=()=>{
    const data=useStaticQuery(graphql`
    query MyQuery {
        allFile(
          filter: {extension: {regex: "/jpg/"}, name: {nin: ["bg1", "bg2"]}}
        ) {
          nodes {
            base
            childImageSharp {
              fluid(maxHeight:600,maxWidth:600) {
               ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)
    console.log(data)
    return(
        <div className="image-container">
            <h1>View our Destination</h1>
            <div className="image-grid">
                {data.allFile.nodes.map((image,key)=>{
                    return(<Img key={key} className="image-item" fluid={image.childImageSharp.fluid}  />)
                    // console.log(image.childImageSharp.fluid);
                })}
            </div>
        </div>
    )
}
export default Image

