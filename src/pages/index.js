import * as React from "react"
import Herosection from "../components/Herosection"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Herosection />
    <Image />
  </Layout>
)

export default IndexPage
