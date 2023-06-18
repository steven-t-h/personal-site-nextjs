'use client'
import HomeHero from '@/app/components/Home/Hero'
import ExperienceBox from '@/app/components/Home/ExperienceBox'
import { Box, Container, chakra } from '@chakra-ui/react'

const expert = [
  {
    name: 'NetSuite',
    description: `Exensive experience developing custom SuiteScripts, SuiteFlows, and SuiteBundles to meet business needs.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/netsuite.svg',
  },
  {
    name: 'Salesforce',
    description: `4+ years administrating and developing on the Salesforce platform, including the development of custom Mangaged Packages.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
  },
  {
    name: 'Javascript',
    description: `15+ years experience using various JS technologies, including React, Node, Express, and more.`,
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    name: 'Typescript',
    description: `5+ years experience using Typescript, including React, Node, Express, and more.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
  },
  {
    name: 'MySQL',
    description: `10+ years experience using MySQL, including extensive experience with complex queries and stored procedures.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
  },
  {
    name: 'PostgreSQL',
    description: `5+ years experience using PostgreSQL, including extensive experience with complex queries and stored procedures.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
  },
]

const master = [
  {
    name: 'React',
    description: `5+ years experience using React, including experience developing multiple internal applications.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  },
  {
    name: 'Git',
    description: `15+ years experience using Git, including extensive experience with complex branching strategies.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  },
  {
    name: 'NPM',
    description: `10+ years experience using NPM, including experience developing internal packages.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg',
  },
  {
    name: 'Amazon Web Services',
    description: `5+ years experience using AWS, including experience developing and deploying serverless applications.`,
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  },
  {
    name: 'Maropost',
    description: `Experience using Maropost, including experience developing custom integrations.`,
    logo: 'https://toolsmetric.com/wp-content/uploads/2022/06/Maropost-Commerce-Cloud-Logo-1200x1200.jpg',
  },
  {
    name: 'Klaviyo',
    description: `Experience using Klaviyo, including experience developing custom integrations for event and metrics including webhooks.`,
    logo: 'https://images.prismic.io/mesa/9322928d-4364-46bc-bf4c-94ad7dd1a274_klaviyo.png?auto=compress,format&rect=0,0,512,512&w=240&h=240',
  },
]

const novice = [
  {
    name: 'Python',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  },
  {
    name: 'PHP',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/php-1.svg',
  },
  {
    name: 'OpenAI',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
  },
  {
    name: 'NextJS',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  },
  {
    name: 'Angular',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
  },
  {
    name: 'MUI',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  },
  {
    name: 'ChakraUI',
    description: ``,
    logo: 'https://avatars.githubusercontent.com/u/54212428?s=280&v=4',
  },
  {
    name: 'Jira',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
  },
  {
    name: 'Express',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
  },
  {
    name: 'NodeJS',
    description: ``,
    logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  },
]

export default function Home() {
  return (
    <>
      <Container minW={'full'} mx={'auto'} py={4}>
        <chakra.div mx="auto" maxW="1200px">
          <HomeHero />
          <ExperienceBox title={'Expert in these areas'} experience={expert} showDescription={true} />
          <ExperienceBox title={'Master of these skills'} experience={master} showDescription={true} />
          <ExperienceBox title={'Other areas '} experience={novice} showDescription={false} />
        </chakra.div>
      </Container>
    </>
  )
}
