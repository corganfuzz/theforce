import React, { Component } from "react";
import { Graph } from "react-d3-graph";

let data = {
  "links":
  [
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
nodes:
[
    {
        "label": "Kontron",
        "id": "244",
        "type": "device"
    },
    {
        "label": "RWS01426829",
        "id": "245",
        "type": "device_instance"
    },
    {
        "label": "test",
        "id": "263",
        "type": "device_instance"
    },
    {
        "label": "MWKS410510",
        "id": "265",
        "type": "device_instance"
    },
    {
        "label": "RWS01534531",
        "id": "267",
        "type": "device_instance"
    },
    {
        "label": "hal/insiteagent:1",
        "id": "248",
        "type": "application"
    },
    {
        "label": "DB Connector",
        "id": "249",
        "type": "application"
    },
    {
        "label": "hal/rtsapi:1",
        "id": "250",
        "type": "application"
    },
    {
        "label": "hal/rmq:1",
        "id": "255",
        "type": "application"
    },
    {
        "label": "AMQP",
        "id": "256",
        "type": "application"
    },
    {
        "label": "Event Hub",
        "id": "257",
        "type": "application"
    },
    {
        "label": "hal/rtsapi:2",
        "id": "260",
        "type": "application"
    },
    {
        "label": "hal/rtsapi:3",
        "id": "261",
        "type": "application"
    },
    {
        "label": "mongo:3-windowsservercore",
        "id": "269",
        "type": "application"
    },
    {
        "label": "IIS Server",
        "id": "282",
        "type": "application"
    },
    {
        "label": "hal/wai:2",
        "id": "285",
        "type": "application"
    },
    {
        "label": "hal/wai:1",
        "id": "286",
        "type": "application"
    },
    {
        "label": "10.133.1.101/hal/rabbitmq:1, hal/rabbitmq:1",
        "id": "287",
        "type": "application"
    },
    {
        "label": "10.133.1.101/hal/rtsapiwellsite:1, hal/rtsapiwellsite:1",
        "id": "288",
        "type": "application"
    },
    {
        "label": "Windows",
        "id": "251",
        "type": "capability"
    },
    {
        "label": "DS InSite",
        "id": "252",
        "type": "capability"
    },
    {
        "label": "ironpy",
        "id": "283",
        "type": "capability"
    },
    {
        "label": ".NET",
        "id": "284",
        "type": "capability"
    },
    {
        "label": "RTS Field",
        "id": "253",
        "type": "tag"
    },
    {
        "label": "Legacy",
        "id": "254",
        "type": "tag"
    }
]
};

// graph = JSON.parse(JSON.stringify(graph).split('"type":').join('"group":'))

// The graph configuration
const myConfig =
{
  nodeHighlightBehavior: true,
  "automaticRearrangeAfterDropNode": true,
  "highlightDegree": 1,
  "highlightOpacity": 0.1,
  "maxZoom": 8,
  "minZoom": 0.5,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1000,
  "height": 1000,

  "node": {
    "color": "lightgreen",
    "fontSize": 14,
    "fontWeight": "normal",
    "labelProperty": "label",
    "mouseCursor": "auto",
    "opacity": 1,
    "renderLabel": true,
    "size": 2000,
    "strokeColor": "black",
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

const styles =
{
  percent:{
    width: '100%',
    height:'100%',
 }
}

const fallbackColor = '#fefefe';

const groups = {
  device: {
    color: "#CC0000"
  },
  capability: {
    color: "#363636"
  },
  tag: {
    color: "lightgreen"
  },
  application: {
    color: "blue"
  },
  device_instance:{
    color: "orange"
  }
};

 data = JSON.parse(JSON.stringify(data).split('"type":').join('"group":'))


class Force extends Component {

  render() {

    // graph = JSON.parse(JSON.stringify(graph).split('"type":').join('"group":'))
    // data.nodes = data.nodes.map(
    //   n => n['color'] = groups[n.type].color || fallbackColor
    // );

    return (
      <div style={styles.percent}>
      <Graph
        id="graph-id"
        data={data}
        config={myConfig}
      />
      </div>
    );
  }
}

export default Force;
