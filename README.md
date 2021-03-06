# Eco Station Monthly Users Dashboard
![](Eco-Stations.gif)

# Dashboard Summary
Uses data acquired from [Open Data (City of Edmonton)](https://dashboard.edmonton.ca/Dashboard/Eco-Station-Users-Monthly/2zer-fm7k) to analyze yearly and monthly trends of Eco Station users. Users can filter by month(s) or by year(s) to view desired trends. Filterable charts and the dashboard have a reset method. 2017 data is not included in this example thus, 72 rows are selected out of 80 rows.

Inspiration for project: [DC.js for Data Science Essential Training](https://www.lynda.com/JavaScript-tutorials/DC-js-Data-Science-Essential-Training/540535-2.html) and [Crossfilter Data Science Essential Training](https://www.lynda.com/JavaScript-tutorials/Crossfilter-Data-Science-Essential-Training/540534-2.html)<br>
The frameworks used include:
[crossfilter.js](http://square.github.io/crossfilter/), [dc.js](https://dc-js.github.io/dc.js/), [d3.js](https://d3js.org/), and [bootstrap.js](https://getbootstrap.com/docs/3.3/javascript/)<br>
Best viewed in: Google Chrome

Desktop Dashbord I: [*****ECO STATION DASHBOARD (CLICK ME!)*****](https://edmonton-open-data.github.io/Edmonton-Eco-Stations/index.html)<br>
Desktop Dashbord II: [*****ECO STATION DASHBOARD II (CLICK ME!)*****](https://github.com/Edmonton-Open-Data/Eco-Station-II#eco-station-ii)

***Note: CLICKABLE ELEMENTS AND MOUSEOVER, ARE DRIVERS IN REVEALING DATA INSIGHT***

# Features Summary
Only the location table isn't dynamic (doesn't update when filters are applied). Dashboard components resize when browser window is resized. [***ECO STATION DASHBOARD***](https://edmonton-open-data.github.io/Edmonton-Eco-Stations/index.html) constitutes of the following:
## 1. Bar chart (monthly trend)
* Clickable bars, elastic y axis, and mouseover on bars
* Shows monthly trend when not filtered (clicked)
* Mouseover shows corresponding month and number of users
* When filtered the line chart, pie chart, and data table update accordingly to reflect filtered data
## 2. Pie Chart (yearly composition)
* Clickable and mouseover for pie slices
* Shows yearly composition when not filtered (clicked)
* Legend data updates as per bar chart filters
* Mouseover shows corresponding year and percentage
* Bar chart and data table update when the chart is filtered
## 3. Line Chart (yearly trend)
* Elastic y axis and mouseover on line
* Shows the **overall** total trend when bar chart is not filtered
* Updates to show yearly trend for clicked month(s)
## 4. Location Table
* Static table
* Shows Edmonton's Eco Station locations
## 5. Number Display
* Dynamic number text
* Displays **overall** total when no filters are applied
* Updates to match filtered data
## 6. Data Table
* Dynamic table
* Maximum rows set to twelve
* Updates to match filtered data

# To-do's
Improvements for the dashboard and potential solutions
- [x] Add chart titles
- [x] Replace static table with leaflet static map
- [ ] Update the [data](https://dashboard.edmonton.ca/Dashboard/Eco-Station-Users-Monthly/2zer-fm7k)
- [ ] Lessen the mouseover delay [tooltipMixin](https://github.com/Intellipharm/dc-addons)
- [ ] Use the [nav](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior) to include both the data table and leaflet map 
- [x] Make the dashboard responsive for mobile and desktop using [aspect ratio](https://blog.webkid.io/responsive-chart-usability-d3/)  and [keenio](https://keen.github.io/dashboards/)
- [ ] Indicate chart extremes (min and max) by applying [bootstrap labels](https://getbootstrap.com/docs/3.3/components/#labels)
- [ ] Implement [intro.js](http://introjs.com/) for step-by-step guide and feature introduction 
- [ ] Learn from [Anmol Koul](https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb/)


