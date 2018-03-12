module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your authors.
  blogAuthorId: "casper", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Yisein", // Site title.
  siteTitleAlt: "Kai-Di Yisein nanowrimo writer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-k1.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://haysclark.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-starter-casper", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "She's a mermaid, but approach her with caution. Her mind swims at a depth most would drown in", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://images.unsplash.com/photo-1483937781853-2907c01dc56d?ixlib=rb-0.3.5&s=a6458bc38bbe2a783cd192888dd589b2&auto=format&fit=crop&w=1500&q=80",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Kai-Di Banton", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  siteSocialUrls: [
    "https://www.instagram.com/yisein/",
    "https://twitter.com/_Yisein",
    "mailto:bantonkaidi@gmail.com"
  ],
  postDefaultCategoryID: "Writing", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/_Yisein",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:bantonkaidi@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/yisein/",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Gatsby Casper Starter" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
