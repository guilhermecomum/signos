$(document).ready(function(){

  d3.csv("/assets/pnad.csv", function(dataset) {
    var columns = ["signo", "renda"];



    d3.select(".stage").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .text(function(column) { return column["signo"]; })
      .attr("class", "bar")
      .style("height", function(column){
        var barHeight = column["renda"] * 50;
        return barHeight + "px";
      })
      .style("width", function(column){
        var barHeight = column["renda"] * 50;
        return barHeight + "px";
      });

    });
});
