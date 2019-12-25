module.exports = {
    siteMetadata: {
        title: 'Liam Clarke',
        description: 'Digital Developer. Developing everything Digital.',
        author: 'Liam Clarke',
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Liam Clarke',
                short_name: 'liamclarke',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'static/favicon/favicon-32x32.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/project`,
                name: 'markdown-pages',
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: 'GTM-P4LMBQN',
              head: true
            },
          },
    ],
};
