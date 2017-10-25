# Eco Station Monthly Users Dashboard
![](Eco-Stations.gif)

# Dashboard Summary
Uses data acquired from [Open Data (City of Edmonton)](https://dashboard.edmonton.ca/Dashboard/Eco-Station-Users-Monthly/2zer-fm7k) to analyze the yealry and monthly trend of Eco Station users. Users can filter by month(s) or by year(s) to view desired trends. Filterable charts and the dashboard have a reset method. 2017 data is not included in this example. 72 rows are selected out of the 80 rows.

Inspiration for project: [DC.js for Data Science Essential Training](https://www.lynda.com/JavaScript-tutorials/DC-js-Data-Science-Essential-Training/540535-2.html)<br>
The frameworks used include:
[crossfilter.js](http://square.github.io/crossfilter/), [dc.js](https://dc-js.github.io/dc.js/), [d3.js](https://d3js.org/), and [bootstrap.js](https://getbootstrap.com/docs/3.3/javascript/)

Desktop Dashbord: [Eco Station Dashboard](https://mikelotis.github.io/Edmonton-Eco-Stations/)

***Note: CLICKABLE ELEMENTS AND MOUSE HOVER, ARE DRIVERS IN REVEALING DATA INSIGHT***

# Features Summary
Only the location table isn't dynamic (doesn't update when filters are applied). The components of the dashboard resize when the window is resized. The dashboard constitutes of the following:
## 1 Bar chart
* Clickable bars, elastic y axis, and mouse hover for the bars
* Shows monthly trend when not filtered (clicked)
* Mouser hover shows corresponding month and number of users
* When filtered the line chart (yearly trend), pie chart (yearly composition) and data table update accordingly to reflect filtered data
## 2 Pie Chart
* Clickable and mouse hover for pie slices and legend rectangles
* Shows yearly composition when not filtered (clicked)
* Legend data updates as per bar chart filters
* Mouser hover shows corresponding year and percentage
* Bar chart (monthly trend) and data table update when the chart is filtered
## 3 Line Chart
* Elastic y axis and mouse hover on line
* Shows the **overall** yearly trend when bar chart is not filtered
* Updates to show yearly trend for clicked month(s)
## 4 Location Table
* Static table
* Shows Eco Station locations within Edmonton
## 5 Number Display
* Dynamic number text
* Displays **overall** total when no filters are applied
* Updates to match filtered data
## 6 Data Table
* Dynamic table
* Set to show only 12 months of the 72 months
* Updates to match filtered data

# TODOs
Improvements for the dashboard and potential solutions
* Lessen the mouse hover delay [tooltipMixin](https://github.com/Intellipharm/dc-addons)
* Increase the number of viewed data to 72 and add vertical scroll bar for data table 
* Make the dashboard responsive for mobile and desktop using [aspect ratio](https://blog.webkid.io/responsive-chart-usability-d3/)  and [keenio](https://keen.github.io/dashboards/)
* Indicate chart extremes (min and max) by applying [bootstrap labels](https://getbootstrap.com/docs/3.3/components/#labels)
* Add chart titles
* Implement [intro.js](http://introjs.com/) for step-by-step guide and feature introduction 


