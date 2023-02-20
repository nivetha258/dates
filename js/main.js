const dateStatic = Date.now();
const dateGiven = new Date("August 20 1995");

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const date = dateObj.getDate();
const day = dateObj.getDay();
const hours = dateObj.getHours();
const mins = dateObj.getMinutes();
const secs = dateObj.getSeconds();
const millisecs = dateObj.getMilliseconds();
const parse = Date.parse(dateObj);

document.getElementById("date").innerHTML = dateStatic + "<br>"+ dateGiven + "<br>"+ "<br>" ;


document.getElementById("dateobj").innerHTML = dateObj + "<br>" + year +"<br>"+
												month + "<br>" + date +"<br>"+
												day + "<br>" + hours +"<br>"+
												mins + "<br>" + secs +"<br>"+
												millisecs +"<br>"+ parse +"<br>"+"<br>";
												

const dateSet = new Date(1962, 6, 7, 12);
const setDate = dateSet.setDate(3);
const dateString = dateSet.setDate(3);
									
document.getElementById("dateSet").innerHTML = dateSet + "<br>" +dateSet.getDate()+"<br>"+
												dateSet.toDateString()+"<br>"+ dateSet.toTimeString()+"<br>"+
												dateSet.toLocaleDateString()+"<br>"+ dateSet.toLocaleTimeString();
												
													