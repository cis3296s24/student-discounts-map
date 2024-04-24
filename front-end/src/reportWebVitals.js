/**
 * @file reportWebVitals.js
 * @description This file contains the utility function to measure and report web vitals for the application.
 */

/**
 * Function to measure and report web vitals.
 * It imports web-vitals library and measures various performance metrics.
 * @function
 * @name reportWebVitals
 * @param {Function} onPerfEntry - Callback function to handle performance entries.
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
