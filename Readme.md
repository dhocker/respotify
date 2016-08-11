# Respotify - React Turtorial

## Overview
This is my implementation of the React tutorial published by [Nitin Punjabi](http://patternhatch.com/author/nitin-punjabi/) as
[A Primer on the React Ecosystem](http://patternhatch.com/2016/07/06/a-primer-on-the-react-ecosystem-part-1-of-3/).
This is a three part series with parts one and two being published.

The tutorial uses:

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