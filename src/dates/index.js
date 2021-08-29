// import moment here; use this package in each function
var moment = require('moment');
//import moment from 'moment';
const { now } = require("moment")

const today = () => {
  // write code for dates.today
  let Date = moment().locale(dddd);
  console.log(Date);
}
today()


const calendar = () => {
  // write code for dates.calendar
 let todaysDate = moment(String)
 console.log(todaysDate);
}
calendar()

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment.format(LTS)
  console.log(time);
}

currentTime()

module.exports = {
  today,
  calendar,
  currentTime
}