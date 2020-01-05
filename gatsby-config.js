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
                icon: 'static/favicon/favicon-32x32.png',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/project`,
                name: 'markdown-pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/media`,
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-140928088-2',
                head: true,
            },
        },
        'gatsby-plugin-offline',
    ],
};
