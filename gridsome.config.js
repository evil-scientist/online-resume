module.exports = {
  siteName: 'Evilscientist\'s online resume',
  siteDescription: 'The online version of Evilscientist\'s condensed resume for companies (or highly inquisitive researchers).',
  siteUrl: 'https://evilscientist.resume.cc.dev',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}