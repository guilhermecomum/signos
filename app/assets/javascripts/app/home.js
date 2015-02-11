$(document).ready(function(){

  var signos = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"]
  var dataset = [];
  for (var i = 0; i < 12; i++) {
    var newNumber = Math.random() * 30;
    dataset.push(newNumber);
  }

  d3.select(".magic").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d){
      var barHeight = d * 5;
      return barHeight + "px";
    })
    .style("width", function(d){
      var barHeight = d * 5;
      return barHeight + "px";
    });

});
