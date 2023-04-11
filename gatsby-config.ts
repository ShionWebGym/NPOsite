import type { GatsbyConfig } from "gatsby";
import { resolve } from "path";



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
    {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
    trackingIds: ['G-ETZPJ8X3GK'],
    pluginConfig: {
    head: true,
      },
    },
    },
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: resolve(__dirname, 'articles')
      }
    },
    {
    resolve:'gatsby-transformer-remark'
    },
    {
    resolve: 'gatsby-plugin-graphql-codegen',
    options: {
      fileName: 'types/graphql-types.d.ts',
      documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    }
  ]
};

export default config;
