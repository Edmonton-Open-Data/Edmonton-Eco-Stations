d3.json("data/Eco_Station_Monthly_Users.json",function(error,entries){
    
    if (error) throw(error);


    // filtered out the 2017 entries the months are not complete we are still in the year of 2017
    // then overwrite entries with the filtered entries
    entries = [].filter.call(entries, function(d) { return d["year"] != "2017"; });


    /*of_users, month, year, and id to number objects
        datetime to a date object
        converting strings to objects mentioned above
    */
    entries.forEach(function(d){

        d.of_users = +d.of_users;
        d.id = +d.id;
        d.datetime = new Date(d.datetime);
        d.month = d.datetime.getMonth();
        d.year = d.datetime.getFullYear();
    });


    // cross filter instance
    var facts = crossfilter(entries);

    //chart variables
    var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var ofUsersArray = [].map.call(entries,function(d) { return d.of_users; });//array for all users
    var sumOfUsersReduced = ofUsersArray.reduce(function(sum, value) { return sum + value; }, 0);//reduced sum of all users

    //dimensions
    var yearDimension = facts.dimension(function(d) { return d.year; });
    var monthDimension = facts.dimension(function(d) { return monthNames[d.month]; });

    //groups
    var yearGroupPie = yearDimension.group().reduceSum(function(d) {return (d.of_users/sumOfUsersReduced)*100; });
    var groupByUsers = function(d) { return d.of_users; };
    var yearGroupLine = yearDimension.group().reduceSum(groupByUsers);
    var monthGroup = monthDimension.group().reduceSum(groupByUsers);
    var sumOfAllUsers = facts.groupAll().reduceSum(groupByUsers);

    //charts
    var dataTable = dc.dataTable("#users-table");
    var totalDisplay = dc.numberDisplay("#total-display");
    var dataCountTable = dc.dataCount("#data-count-table");
    pieChart = dc.pieChart("#pie-chart");// no var to be accessed by filter class for pie, bar and line charts
    barChart = dc.barChart("#bar-chart");
    lineChart = dc.lineChart("#line-chart");


    //number
    totalDisplay.group(sumOfAllUsers)
                .valueAccessor(function(d) { return d; })
                .formatNumber(d3.format(","));
    d3.select("span#total-users").text('|'+sumOfUsersReduced.toLocaleString());


    //filter printer
    dataCountTable.dimension(facts)
                    .group(facts.groupAll())
                    .html({some: "<strong>%filter-count</strong> months(s) selected out of <strong>%total-count</strong> months. | "+
                                '<a href= "\javascript:dc.filterAll(); dc.renderAll();\">Reset All</a>',
                            all: "All records selected. Please click on the graph to apply filters."});


    //Data table
    dataTable.dimension(yearDimension)
                .group(function(d) { return d.year; })
                .showGroups(false)
                .columns(["id",
                        {label:"Month/Year",format: function(d) { return monthNames[d.month] +' '+d.year }},
                        {label:"Users",format:function(d) { return d.of_users; }}])
                .size(12)
                .sortBy(function(d) { return d.id; })
                .order(d3.ascending);


    //Draw Bar, Line, and Pie Charts 
    charts();


    //Draw the Charts upon window resize
    d3.select(window)
        .on("resize",charts);


    function charts() {

        var graphMargin = {top:20,right:12,bottom:20,left:50};// for barChart and lineChart
        var yearsArray = yearGroupLine.all();// for lineChart domain
        
        //Width and Height for charts
        var barChartWidth = getOffsetSizes("#bar-chart").width;
        var barChartHeight = getOffsetSizes("#bar-chart").height;
        var lineChartWidth = getOffsetSizes("#line-chart").width;
        var lineChartHeight = getOffsetSizes("#line-chart").height;
        var pieChartWidth = getOffsetSizes("#pie-chart").width;
        var pieChartHeight = getOffsetSizes("#pie-chart").height;
       


        //Bar
        barChart.width(barChartWidth)
                .height(barChartHeight)
                .barPadding(0.02)
                .outerPadding(0)
                .clipPadding(30)
                .margins(graphMargin)
                .dimension(monthDimension).group(monthGroup)
                .title(function(d) { return d.key +': '+ d.value.toLocaleString(); })
                .x(d3.scale.ordinal().domain(monthNames))
                .xUnits(dc.units.ordinal)
                .elasticY(true);


        //line
        lineChart.dimension(yearDimension)
                    .group(yearGroupLine)
                    .width(lineChartWidth)
                    .height(lineChartHeight)
                    .margins(graphMargin)
                    .elasticY(true)
                    .brushOn(false)
                    .x(d3.scale.linear().domain([d3.min(yearsArray, function(d) { return d.key; }),
                                                d3.max(yearsArray, function(d) { return d.key; })]))
                    .renderArea(true)
                    .xAxis()
                    .tickFormat(d3.format(".0f"))
                    .ticks(6);


        //pie
        pieChart.dimension(yearDimension)
                .group(yearGroupPie)
                .width(pieChartWidth)
                .height(pieChartHeight)
                .externalLabels(10)
                .innerRadius(Math.round((pieChartHeight) * 0.2, 1))
                .cx(Math.round((pieChartWidth)) * 0.6, 1))
                .cy(Math.round((pieChartHeight) * 0.5, 1))
                .radius(Math.round((pieChartHeight) * 0.325, 1))
                .label(function(d) { return d.value.toFixed(2) + '%'; })
                .title(function(d) { return d.key+': '+ (Math.round((d.value/100) * sumOfUsersReduced, 1)).toLocaleString(); })
                .legend(dc.legend())
                //https://github.com/dc-js/dc.js/blob/master/web/examples/pie-external-labels.html
                //solution for adding dynamic data to legend
                .on("pretransition.legend", function(chart) { 
                    chart.selectAll(".dc-legend-item text")      
                    .text('')
                    .append("tspan")
                    .text(function(d) { return d.name; })
                    .append("tspan")
                    .attr('x', 90)
                    .attr("text-anchor", "end")
                    .text(function(d) { return Math.round((d.data/100) * sumOfUsersReduced, 1).toLocaleString(); });
                });


        //rendering
        dc.renderAll();
    }

    //gets the div's offset width and height
    //for responsiveness
    function getOffsetSizes(div){

        var div = {width: d3.select(div)[0][0].offsetWidth,
                    height: d3.select(div)[0][0].offsetHeight};
        return div;
    }
});
