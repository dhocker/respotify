# Respotify - React Turtorial

## Overview
This is my implementation of the React tutorial published by [Nitin Punjabi](http://patternhatch.com/author/nitin-punjabi/) as
[A Primer on the React Ecosystem](http://patternhatch.com/2016/07/06/a-primer-on-the-react-ecosystem-part-1-of-3/).
This is a three part series with parts one and two being published as of the date of this writing.

The tutorial implementation uses:

- React
- Webpack
- Babel
- axios
- eslint

I've made a few embelishments to the stock tutorial.
- I added highlighting to the track list to clearly indicate when a track is playing.
- Clicking on a track toggles its status. If it is playing it will stop. If it is
stopped it will play. The currently playing tracked is always stopped before another
track is started.

This is a really good tutorial for learning about React and related technologies.
## Credits and License
This implementation is based on the work of Nitin Punjabi as published on his [web site](http://patternhatch.com)
and full credit is given. Many thanks to Nitin for his work.
The derivative work contained in this implementaton is subject to the LICENSE
included in the project repo.
## Set Up
Clone the repository to your favorite location. Install all dependencies (from package.json):

    npm install

## Build
Run a one time build based on webpack.config.js

    npm run build

## Debug/Run/Watch
Run the Webpack dev server and watch for file changes:

    npm run start

## References
- [A Primer on the React Ecosystem](http://patternhatch.com/2016/07/06/a-primer-on-the-react-ecosystem-part-1-of-3/)