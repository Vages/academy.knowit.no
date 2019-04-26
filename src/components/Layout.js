import React from "react"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>Knowit Academy Norway</title>
        <meta
          name="description"
          content="Knowit Academy Norway er Knowits interne kompetanseutviklingsprogram for alle ansatte i Knowits norske enheter.
          
          Planleggingen av programmet for 2019-2020 er i gang, og mer informasjon vil bli lagt ut så snart det er klart."
        />
        <link rel="canonical" href="https://academy.knowit.no/" />
        <html lang="nb" />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
