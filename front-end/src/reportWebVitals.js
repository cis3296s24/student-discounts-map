/**
 * @file reportWebVitals.js
 * @description This file includes the utility function to measure and report web vitals,
 * which are essential metrics for assessing the health and performance of the application
 * in a production environment. These metrics help understand real-world user experience
 * across different aspects of site performance.
 */

/**
 * Captures and logs key performance metrics using the web-vitals library. This function is 
 * designed to help developers understand how users are experiencing the application in terms
 * of loading speed, interactivity, and visual stability. By measuring these metrics, developers
 * can identify and address performance bottlenecks to improve user experience.
 *
 * @function
 * @name reportWebVitals
 * @param {Function} onPerfEntry 
 *   - Callback function that receives data on each of the core web vitals:
 *   - CLS (Cumulative Layout Shift): Measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
 *   - FID (First Input Delay): Measures the time from when a user first interacts with your site (i.e., when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.
 *   - FCP (First Contentful Paint): Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.
 *   - LCP (Largest Contentful Paint): Measures the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.
 *   - TTFB (Time to First Byte): Measures the time it takes for the browser to receive the first byte of the response after requesting a page from the server.
 *   
 * Each of these metrics provides insights into different aspects of the site performance and can guide optimization efforts.
 *
 * @example
 * import reportWebVitals from './reportWebVitals';
 * 
 * reportWebVitals(console.log);
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
