import React, { Component } from "react";
import { Graph } from "react-d3-graph";

const data =
{
  "links": [
      {
          "source": "255",
          "target": "245"
      },
      {
          "source": "251",
          "target": "245"
      },
      {
          "source": "252",
          "target": "245"
      },
      {
          "source": "244",
          "target": "245"
      },
      {
          "source": "249",
          "target": "248"
      },
      {
          "source": "248",
          "target": "250"
      },
      {
          "source": "282",
          "target": "251"
      },
      {
          "source": "286",
          "target": "251"
      },
      {
          "source": "269",
          "target": "251"
      },
      {
          "source": "261",
          "target": "251"
      },
      {
          "source": "260",
          "target": "251"
      },
      {
          "source": "255",
          "target": "251"
      },
      {
          "source": "250",
          "target": "251"
      },
      {
          "source": "248",
          "target": "251"
      },
      {
          "source": "248",
          "target": "252"
      },
      {
          "source": "261",
          "target": "253"
      },
      {
          "source": "260",
          "target": "253"
      },
      {
          "source": "255",
          "target": "253"
      },
      {
          "source": "250",
          "target": "253"
      },
      {
          "source": "248",
          "target": "253"
      },
      {
          "source": "248",
          "target": "254"
      },
      {
          "source": "256",
          "target": "255"
      },
      {
          "source": "257",
          "target": "255"
      },
      {
          "source": "261",
          "target": "255"
      },
      {
          "source": "260",
          "target": "255"
      },
      {
          "source": "250",
          "target": "255"
      },
      {
          "source": "286",
          "target": "256"
      },
      {
          "source": "283",
          "target": "263"
      },
      {
          "source": "284",
          "target": "263"
      },
      {
          "source": "252",
          "target": "263"
      },
      {
          "source": "251",
          "target": "263"
      },
      {
          "source": "244",
          "target": "263"
      },
      {
          "source": "244",
          "target": "265"
      },
      {
          "source": "288",
          "target": "267"
      },
      {
          "source": "287",
          "target": "267"
      },
      {
          "source": "244",
          "target": "267"
      },
      {
          "source": "285",
          "target": "282"
      },
      {
          "source": "285",
          "target": "283"
      },
      {
          "source": "282",
          "target": "284"
      },
      {
          "source": "285",
          "target": "286"
      }
  ],
"nodes": [
    {
        "id": "244"
    },
    {
        "id": "245"
    },
    {
        "id": "263"
    },
    {
        "id": "265"
    },
    {
        "id": "267"
    },
    {
        "id": "248"
    },
    {
        "id": "249"
    },
    {
        "id": "250"
    },
    {
        "id": "255"
    },
    {
        "id": "256"
    },
    {
        "id": "257"
    },
    {
        "id": "260"
    },
    {
        "id": "261"
    },
    {
        "id": "269"
    },
    {
        "id": "282"
    },
    {
        "id": "285"
    },
    {
        "id": "286"
    },
    {
        "id": "287"
    },
    {
        "id": "288"
    },
    {
        "id": "251"
    },
    {
        "id": "252"
    },
    {
        "id": "283"
    },
    {
        "id": "284"
    },
    {
        "id": "253"
    },
    {
        "id": "254"
    }
  ]
}

// graph = JSON.parse(JSON.stringify(graph).split('"type":').join('"group":'))

// graph = graph.replace("\"type\":", "\"group\":");
// graph = graph.replace("\"type\":", "\"group\":");

// The graph configuration
const myConfig =
{
  "automaticRearrangeAfterDropNode": false,
  "height": 900,
  "highlightBehavior": true,
  "highlightDegree": 1,
  "highlightOpacity": 0.1,
  "maxZoom": 8,
  "minZoom": 0.5,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1500,
  "node": {
    "color": "lightgreen",
    "fontSize": 8,
    "fontWeight": "normal",
    // "labelProperty": "label",
    "mouseCursor": "auto",
    "opacity": 1,
    "renderLabel": true,
    "size": 1450,
    "strokeColor": "none",
    "strokeWidth": 1.5,
    "symbolType": "circle",
    "highlightColor": "SAME",
    "highlightFontSize": 12,
    "highlightFontWeight": "normal",
    "highlightStrokeColor": "blue",
    "highlightStrokeWidth": 1.5
  },
  "link": {
    "color": "#d3d3d3",
    "opacity": 1,
    "semanticStrokeWidth": false,
    "strokeWidth": 1.5,
    "highlightColor": "lightblue"
  }
};


class Force extends Component {


  render() {


    return (
      <div>
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        // onClickLink={onClickLink}
        // onMouseOverNode={onMouseOverNode}
        // onMouseOutNode={onMouseOutNode}
      />
      </div>
    );
  }
}

export default Force;
