/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Captains Log`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data",
      },
    },
  ],
};
