# Phil Anderson's Blog


## October 29, 2019

### Displaying A Pack Of Cards

Please visit [https://philanderson.uk](https://philanderson.uk) and click on 'VueJS' to visit my blog about the work I have done to create two pages showing 1) A pack of playing cards in order 2) The ability to shuffle and unshuffle such a pack.

Or click on [https://epic-hamilton-f35937.netlify.com](https://epic-hamilton-f35937.netlify.com/shufflecards) and find the two pages for displaying cards and displaying a shuffled pack of cards



## October 19, 2019

## Blog with the actual site created and posted to GitHub using a Contentful Starter template.  Once posted to GitHub, Netlify reads the repo and publishes it online.  The API keys have to be added to the environment variables on Netlify in order for the content to build correctly.  Once all built, new blog posts can be added by writing them on Contentful.



# Contentful Gatsby Starter Blog

Create a [Gatsby](http://gatsbyjs.com/) blog powered by [Contentful](https://www.contentful.com). This is a simplified version of the [Gatsby Contentful Starter](https://github.com/contentful-userland/gatsby-contentful-starter) which is maintained by our Community.

![The index page of the starter blog](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/screenshot.jpg "The index page of the starter blog")

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Features

* Simple content model and structure. Easy to adjust to your needs.
* Use the [synchronization feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization) of our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
* Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) and our [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).

## Getting started

See our [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand

