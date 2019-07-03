import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
import Layout from "../../../components/FrontLayout"
import css from "../../../styles/tech-lead-index.module.scss"

const TeamLeadProgram = ({ data }) => {
  const courseInfo = data.allMarkdownRemark.edges
    .filter((i) => i.node.frontmatter.path.match(/^\/courses\/team-lead/))
    .map((i) => {
      i.node.frontmatter.date = new Date(i.node.frontmatter.date)
      return i
    })
    .sort((a, b) =>
      a.node.frontmatter.date > b.node.frontmatter.date ? 1 : -1
    )
    .map((i) => {
      return (
        <tr key={i.node.frontmatter.path}>
          <td className="title">{i.node.frontmatter.title}</td>
          <td className="teacher">{i.node.frontmatter.teacher}</td>
          <td className="date">
            {i.node.frontmatter.date.toLocaleDateString("no")}
          </td>
          <td className={css.info}>
            <a href={i.node.frontmatter.path}>info</a>
          </td>
        </tr>
      )
    })

  const metadata = data.site.siteMetadata
  metadata.title = "Team-Lead programmet 2019/2020"
  metadata.description = `
    Team-Lead programmet i Knowit Academy starter i september 2019 og varer 
    fram til sommeren 2020. Her finner du mer informasjon om programmet, 
    hvilke kurs og workshops som er med, og informasjons om hvordan du søker
  `
  metadata.siteUrl = "https://academy.knowit.no/programs/team-lead/"

  console.log("data", data)
  console.log("courses", courseInfo)
  return (
    <Layout data={data.site.siteMetadata}>
      <section id="main">
        <table>
          <thead>
            <tr>
              <td>Tema</td>
              <td>Foredragsholder</td>
              <td>Tentativ dato</td>
              <td>Om kurset</td>
            </tr>
          </thead>
          <tbody>{courseInfo}</tbody>
        </table>
      </section>
    </Layout>
  )
}

export default TeamLeadProgram

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        ogImage
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            path
            date
            description
            image
            teacher
          }
        }
      }
    }
  }
`