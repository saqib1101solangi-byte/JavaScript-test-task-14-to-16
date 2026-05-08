// Start Task


// 1st task

var studentNames = []



// 2nd task

var studentNames2 = new Array()



// 3rd task

var fruits = ["Apple", "Banana", "Mango"]



// 4th task

var number = [10, 20, 30, 40]



// 5th task

var flags = [true, false, true]



// 6th task

var mixedarray = ["Saqib ", 17, true]



// 7th Task

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. PLil.", "PHD"]
document.write("<h1>Qualification:</h1>")
for(var i = 0; i < qualification.length; i++){
    document.write((i + 1) + ") " + qualification[i] + "<br>");
}


// 8nd task

var Students = ["Saqib", "Ali", "Ahmed"]
var Scores = [420, 380, 450]
var tolalMarks = 500 

for(var i = 0; i < Students.length; i++){
    var percentage = (Scores[i] / tolalMarks) * 100
    document.write("<h3>" + "Score of " + Students[i] + ". Percentage: " + percentage + "% <br>" + "</h3>");
} 



// 9th task

var colors = ["<h3>","Red", "Blue", "Green"]

document.write("<h1> Orginal Array: </h1>" + colors + "<br><br>");

// a
var colorStart = prompt("Enter color to add at begining:");
colors.unshift(colorStart);

document.write("After Adding at begining: " + colors + "<br><br>")

// b
var colorEnd = prompt("Enter color to add at end: ");
colors.push(colorEnd);

document.write("After adding at end: " + colors + "<br><br>")

// d
colors.shift();

document.write("After deleting first colors: " + colors + "<br><br>")

// e
colors.pop()

document.write("After deleting last color: " + colors + "<br><br>")

// f
var indexAdd = +prompt("Enter index to add color");
var colorAdd = prompt("Enter color name");

colors.splice(indexAdd, 0, colorAdd);

document.write("After Adding color at index: " + colors + "<br><br>");

// g
var indexDelete = +prompt("Enter index to delete color: ");
var deletecount = +prompt("How many color you want to delele?");

colors.splice(indexDelete,deletecount);

document.write("After deleting colors: " + colors);




// 10 task

var Score = [320, 230, 480,120]

document.write("Scores of Students: " + Score + "<br>")

Score.sort(function(a, b){
    return a - b;
})
document.write("Ordered Scores of Students: " + Score);


// 11 task
var cities = ["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"]
var selectedCities = cities.slice(2,5);

document.write("Cities List: " + cities + "<br><br>")
document.write("Selected Cities List: " + selectedCities);



// 12 task
var arr = ["This", "is", "my", "Bike"];
var result = arr.join(" ");

document.write(result)



// 13 task
var devices = []

devices.push("keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

document.write("Devies: <br>");
document.write(devices + "<br><br>");


document.write("Out: <br>");
document.write(devices.shift() + "<br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");
 




// 14 task

var  device = []

device.push("Keyboard")
device.push("Mouse")
device.push("Printer")
device.push("Monitor")

document.write("Devices: <br>")
document.write(device + "<br><br>")

document.write("Out: <br>")
document.write(device.pop() + "<br>")

document.write("Out: <br>")
document.write(device.pop() + "<br>")

document.write("Out: <br>")
document.write(device.pop() + "<br>")

document.write("Out: <br>")
document.write(device.pop() + "<br>")


// 15th task

var phones = ["Iphone", "Oppo", "vivo", "infinix", "Samsung", "Realme"]

document.write("<select>")

for(var i = 0; i < phones.length; i++){
    document.write("<option>") + phones[i] + "</option>"
}

document.write("</select>" + "</h3>");