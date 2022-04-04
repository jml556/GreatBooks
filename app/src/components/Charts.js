import React from "react";
import { VictoryTheme, VictoryChart, VictoryLegend } from "victory";
import { VictoryBar } from "victory";
import { Canvas } from "reaflow";

const nodes = [
  {
    id: "1",
    text: "1",
  },
  {
    id: "2",
    text: "2",
  },
];

const edges = [
  {
    id: "1-2",
    from: "1",
    to: "2",
  },
];

function formatData(arr) {
  const formattedArr = arr.slice().map((item) => {
    const newArr = item.split("");

    return newArr.join("");
  });

  function getCountForBooks(arr) {
    const obj = {};
    arr.forEach((item) => {
      const arr = item.split(".");
      if (!obj[arr[0]]) {
        obj[arr[0]] = 0;
      }
      obj[arr[0]]++;
    });
    return obj;
  }

  return getCountForBooks(formattedArr);
}

const Charts = (props) => {
  const dataCited = Object.entries(formatData(props.data.propsCited))
    .map((item) => {
      return {
        x: item[0],
        y: item[1],
      };
    })
    .sort((a, b) => a.y - b.y);

  const dataCitedBy = Object.entries(formatData(props.data.propsCitedBy))
    .map((item) => {
      return {
        x: item[0],
        y: item[1],
      };
    })
    .sort((a, b) => a.y - b.y);

  return (
    <div>
    <div style={{height: '500px'}}>
            <Canvas nodes={nodes} edges={edges}/>
    </div>

      <VictoryChart domainPadding={30}>
        <VictoryLegend
          x={125}
          y={0}
          title={`   Propositions which use Book ${props.data.book}. ${props.data.proposition}   `}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 10 } }}
          data={[{ name: "Number of Propositions", symbol: { fill: "red" } }]}
        />
        <VictoryBar
          horizontal
          style={{ data: { fill: "#c43a31" } }}
          data={dataCited}
        />
      </VictoryChart>
      <VictoryChart domainPadding={30}>
        <VictoryLegend
          x={125}
          y={0}
          title={`   Propositions which use Book ${props.data.book}. ${props.data.proposition}   `}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 10 } }}
          data={[{ name: "Number of Propositions", symbol: { fill: "red" } }]}
        />
        <VictoryBar
          horizontal
          style={{ data: { fill: "#c43a31" } }}
          data={dataCitedBy}
        />
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
