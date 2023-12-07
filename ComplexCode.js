// Filename: ComplexCode.js
// Content: Complex and Elaborate JavaScript Code

// Importing external libraries
const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');

// Define global variables
let data = [];
let filteredData = [];
let sortedData = [];
let finalResult = "";

// Function to retrieve data from an API
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    data = response.data;
    console.log('Data successfully fetched!');
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Function to filter data based on a specific condition
function filterData() {
  filteredData = _.filter(data, (item) => item.status === 'completed');
  console.log('Data successfully filtered!');
}

// Function to sort data by a specific property
function sortData() {
  sortedData = _.orderBy(filteredData, ['date'], ['desc']);
  console.log('Data successfully sorted!');
}

// Function to generate a report based on the sorted data
function generateReport() {
  sortedData.forEach((item) => {
    const formattedDate = moment(item.date).format('YYYY-MM-DD');
    const reportEntry = `${formattedDate} -- ${item.name}, Status: ${item.status}\n`;
    finalResult += reportEntry;
  });
  console.log('Report successfully generated!');
}

// Asynchronous function to execute the entire process
async function run() {
  console.log('Starting the data processing...');
  await fetchData();
  filterData();
  sortData();
  generateReport();
  console.log('Process completed!');
}

// Start the execution
run();