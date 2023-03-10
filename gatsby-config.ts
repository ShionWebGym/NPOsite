import type { GatsbyConfig } from "gatsby";



const config: GatsbyConfig = {
  siteMetadata: {
    title: `NPO小動物疾患研究所`,
    siteUrl: `https://nposite.netlify.app/`,
    description:`NPO法人小動物疾患研究所の公式サイトです。`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sass",
    "gatsby-plugin-breadcrumb",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: false,
        autoGenHomeLabel: `ホーム`,
        crumbLabelUpdates: [
          {
            pathname: '/Greeting',
            crumbLabel: '挨拶'
          },
          {
            pathname: '/Meaning',
            crumbLabel: '趣旨'
          },
          {
            pathname: '/Teikan',
            crumbLabel: '定款'
          },
          {
            pathname: '/Wvc',
            crumbLabel: 'WVCセミナー'
          },
       ],
     },
    }
  ]
};

export default config;
