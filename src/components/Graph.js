import {connect} from "react-redux"
import { useEffect,useRef } from "react"
import * as d3 from 'd3';
import "../components/Graph.css"

function Graph({data}) {
    const graphRef = useRef(null);

    useEffect(() => {
      if(data.length===0){
        return;
      }
      // Chart dimensions and margins
      d3.select(graphRef.current).selectAll("*").remove();
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      // const width = 500 - margin.left - margin.right;
      // const height = 300- margin.top - margin.bottom;

      const width=1000
      const height=300

// Create the SVG element
    const svg = d3
      .select(graphRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define the x and y scales
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.Month))
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => d.Sum_Target_Base)])
      .nice();

// Draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.Month))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.Sum_Target_Base))
      .attr("height", (d) => height - y(d.Sum_Target_Base));

// Add x-axis
      svg.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(x));

      // Add x-axis label
      svg
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("X-Axis Label");

    // Add y-axis
    const yAxis = svg.append("g").call(d3.axisLeft(y));

    // Add y-axis label
    yAxis
      .append("text")
      .attr("class", "axis-label")
      .attr("x", 0)
      .attr("y", -margin.left) // Adjust the position as needed
      .attr("dy", "0.8em")
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "end")
      .text("Y-Axis Label");

  
    }, [data]);

    console.log("Inside graph",data)
    return ( 
        <div className="mt-4 bg-white h-[400px] p-6 rounded-lg" >
            <svg ref={graphRef}></svg>
            
        </div>
     );
}


const mapStateToProps=(state)=>{
    return {
        data:state.data.data
    }
}

export default connect(mapStateToProps)(Graph);