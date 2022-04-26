import React from "react";
import { VictoryTheme, VictoryChart, VictoryLegend , VictoryAxis} from "victory";
import { VictoryBar } from "victory";
import { Canvas } from "reaflow";
import { formatData, displayNodes, getDataForCharts } from "../utilities/utils";

const Charts = (props) => {
  console.log(props.data);
  const dataCited = getDataForCharts(props.data.propsCited);

  const dataCitedBy = getDataForCharts(props.data.propsCitedBy);

  const nodes = displayNodes(props.data.propsCitedBy).map((item, idx, arr) => {
    let book = item.split(".");
    if (book.length !== 2) {
      book = book.slice(0, 2).join("");
    }
    return {
      id: `${idx + 2}`,
      text: `Book ${book}`,
      width: 90,
      height: 30
    };
  });

  nodes.unshift({
    id: "1",
    text: `Book ${props.data.book}. ${props.data.proposition}`,
  });

  const citedNodes = displayNodes(props.data.propsCited).map((item, idx, arr) => {
    let book = item.split(".");
    if (book.length !== 2) {
      book = book.slice(0, 2).join("");
    }
    return {
      id: `${idx + nodes.length + 1}`,
      text: `Book ${book}`,
      width: 90,
      height: 30
    };
  })

  console.log([...nodes, ...citedNodes])

  // nodes.push(displayNodes(props.data.propsCited).map((item, idx, arr) => {
  //   let book = item.split(".");
  //   if (book.length !== 2) {
  //     book = book.slice(0, 2).join("");
  //   }
  //   return {
  //     id: `${idx + 2}`,
  //     text: `Book ${book}`,
  //   };
  // }))

  const citedEdges = citedNodes.map(item => {
    if(item.id === '1') return ''
    return {
      id: `1 - ${item.id}`,
      to: `${item.id}`,
      from: "1",
    };
  })

  const edges = nodes.map((item) => {
    if(item.id === '1') return ''
    return {
      id: `1 - ${item.id}`,
      from: `${item.id}`,
      to: "1",
    };
  }).filter(item => item !== '');


  console.log(edges, edges)

  return (
    <div>
      <div style={{ height: "500px", marginBottom: 30 }}>
        <Canvas
        zoom={1}
        maxWidth={2500}
        fit={true}
        pannable={true}
          arrow={null}
          nodes={[...nodes, ...citedNodes]}
          edges={[...edges, ...citedEdges]}
        />
      </div>
      <VictoryChart domainPadding={30} >
        <VictoryLegend
          x={80}
          y={0}
          title={`   Number of Books and propositions which are used by ${props.data.book}. ${props.data.proposition}   `}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 10 } }}
          data={[{ name: "Number of Propositions", symbol: { fill: "red" } }]}
        />
        <VictoryBar style={{ data: { fill: "#c43a31" , width: 25 } }} data={dataCited} />
      </VictoryChart>
      <VictoryChart domainPadding={30}>
        <VictoryLegend
          x={80}
          y={0}
          title={`   Number of Books and propositions which use ${props.data.book}. ${props.data.proposition}   `}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 10 } }}
          data={[{ name: "Number of Propositions", symbol: { fill: "red" } }]}
        />
        <VictoryBar style={{ data: { fill: "#c43a31", width: 25 } }} data={dataCitedBy} />
      </VictoryChart>
      <h1 style={{ fontSize: 36 }}>Enunciation</h1>
      <p style={{ marginBottom: 16, color: "#888" }}>
        {props.data.enunciation}
      </p>
      <h2 style={{ fontSize: 24 }}>Text</h2>
      <p style={{ color: "#888", marginTop: 10 }}>{props.data.text}</p>
    </div>
  );
};

export default Charts;
