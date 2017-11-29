import React, { Component } from 'react';
import './App.css';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

let graph = {

nodes: [
   {
      "id": 134,
      "type": "device",
      "label": "system_76_meerkat"
   },
   {
      "id": 137,
      "type": "device",
      "label": "Edge Gateway 5100"
   },
   {
      "id": 140,
      "type": "device",
      "label": "Meerkat"
   },
   {
      "id": 142,
      "type": "device",
      "label": ""
   },
   {
      "id": 143,
      "type": "device",
      "label": "Hub"
   },
   {
      "id": 144,
      "type": "device",
      "label": "ASM1051E SATA 6Gb/s bridge, ASM1053E SATA 6Gb/s bridge, ASM1153 SATA 3Gb/s bridge"
   },
   {
      "id": 147,
      "type": "device",
      "label": "PowerEdge R415"
   },
   {
      "id": 151,
      "type": "device",
      "label": "PowerEdge R515"
   },
   {
      "id": 154,
      "type": "device",
      "label": "NUC-6300U"
   },
   {
      "id": 169,
      "type": "device",
      "label": "accelerometer"
   },
   {
      "id": 170,
      "type": "device",
      "label": "light_sensor"
   },
   {
      "id": 171,
      "type": "device",
      "label": "temperature_sensor"
   },
   {
      "id": 172,
      "type": "device",
      "label": "barometer"
   },
   {
      "id": 173,
      "type": "device",
      "label": "XDK"
   },
   {
      "id": 187,
      "type": "device",
      "label": "4-port hub"
   },
   {
      "id": 188,
      "type": "device",
      "label": "VL812 Hub"
   },
   {
      "id": 189,
      "type": "device",
      "label": "Nuvo-5000"
   },
   {
      "id": 192,
      "type": "device",
      "label": "Unifying Receiver"
   },
   {
      "id": 135,
      "type": "instance",
      "label": "edge"
   },
   {
      "id": 138,
      "type": "instance",
      "label": "EGW02"
   },
   {
      "id": 139,
      "type": "instance",
      "label": "EGW01"
   },
   {
      "id": 141,
      "type": "instance",
      "label": "07e6c2b8ca3f"
   },
   {
      "id": 146,
      "type": "instance",
      "label": "egw03"
   },
   {
      "id": 148,
      "type": "instance",
      "label": "33f670b31374"
   },
   {
      "id": 149,
      "type": "instance",
      "label": "svdidac009"
   },
   {
      "id": 150,
      "type": "instance",
      "label": "svdidac002"
   },
   {
      "id": 152,
      "type": "instance",
      "label": "zergvt"
   },
   {
      "id": 153,
      "type": "instance",
      "label": "zergvt"
   },
   {
      "id": 155,
      "type": "instance",
      "label": "egw04"
   },
   {
      "id": 156,
      "type": "instance",
      "label": "zergvt03"
   },
   {
      "id": 157,
      "type": "instance",
      "label": "zergvt02"
   },
   {
      "id": 158,
      "type": "instance",
      "label": "zergvt01"
   },
   {
      "id": 159,
      "type": "instance",
      "label": "zergvt01"
   },
   {
      "id": 160,
      "type": "instance",
      "label": "zergvt04"
   },
   {
      "id": 161,
      "type": "instance",
      "label": "zergvt02"
   },
   {
      "id": 180,
      "type": "instance",
      "label": "XDK_1"
   },
   {
      "id": 181,
      "type": "instance",
      "label": "XDK_2"
   },
   {
      "id": 182,
      "type": "instance",
      "label": "XDK_3"
   },
   {
      "id": 183,
      "type": "instance",
      "label": "XDK_4"
   },
   {
      "id": 184,
      "type": "instance",
      "label": "XDK_5"
   },
   {
      "id": 185,
      "type": "instance",
      "label": "zergvt03"
   },
   {
      "id": 186,
      "type": "instance",
      "label": "zergvt01"
   },
   {
      "id": 190,
      "type": "instance",
      "label": "egw05"
   },
   {
      "id": 133,
      "type": "os",
      "label": "Ubuntu_16_4"
   },
   {
      "id": 136,
      "type": "os",
      "label": "Microsoft Windows 10 Enterprise_10_0"
   },
   {
      "id": 145,
      "type": "os",
      "label": "Microsoft Windows 10 Enterprise N 2016 LTSB_10_0"
   },
   {
      "id": 191,
      "type": "os",
      "label": "Microsoft Windows 10 Enterprise 2016 LTSB_10_0"
   }
],
    edges: [
   {
      "from":133,
      "to":134
   },
   {
      "from":192,
      "to":135
   },
   {
      "from":187,
      "to":135
   },
   {
      "from":142,
      "to":135
   },
   {
      "from":143,
      "to":135
   },
   {
      "from":134,
      "to":135
   },
   {
      "from":145,
      "to":137
   },
   {
      "from":136,
      "to":137
   },
   {
      "from":137,
      "to":138
   },
   {
      "from":137,
      "to":139
   },
   {
      "from":133,
      "to":140
   },
   {
      "from":142,
      "to":141
   },
   {
      "from":140,
      "to":141
   },
   {
      "from":134,
      "to":146
   },
   {
      "from":133,
      "to":147
   },
   {
      "from":147,
      "to":148
   },
   {
      "from":147,
      "to":149
   },
   {
      "from":147,
      "to":150
   },
   {
      "from":133,
      "to":151
   },
   {
      "from":151,
      "to":152
   },
   {
      "from":147,
      "to":153
   },
   {
      "from":133,
      "to":154
   },
   {
      "from":188,
      "to":155
   },
   {
      "from":154,
      "to":155
   },
   {
      "from":147,
      "to":156
   },
   {
      "from":147,
      "to":157
   },
   {
      "from":151,
      "to":158
   },
   {
      "from":151,
      "to":159
   },
   {
      "from":147,
      "to":160
   },
   {
      "from":147,
      "to":161
   },
   {
      "from":162,
      "to":164
   },
   {
      "from":163,
      "to":164
   },
   {
      "from":162,
      "to":166
   },
   {
      "from":165,
      "to":166
   },
   {
      "from":162,
      "to":168
   },
   {
      "from":165,
      "to":168
   },
   {
      "from":164,
      "to":169
   },
   {
      "from":166,
      "to":170
   },
   {
      "from":167,
      "to":171
   },
   {
      "from":168,
      "to":172
   },
   {
      "from":170,
      "to":173
   },
   {
      "from":172,
      "to":173
   },
   {
      "from":169,
      "to":173
   },
   {
      "from":147,
      "to":185
   },
   {
      "from":147,
      "to":186
   },
   {
      "from":191,
      "to":189
   },
   {
      "from":189,
      "to":190
   }
]
};

// graph = JSON.parse(JSON.stringify(graph).split('"type":').join('"group":'))

// graph = graph.replace("\"type\":", "\"group\":");
// graph = graph.replace("\"type\":", "\"group\":");


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      node: [],
      link: [],
      label:[],
    }
  }

componentDidMount () {
  this.setState({
    node: graph.nodes,
    link: graph.edges,
    // linkto: graph.edges.to,
    // label: graph.nodes.label,
  })

}

  render() {
    console.log (this.state.node)
    return (
      <div>
        <InteractiveForceGraph
          simulationOptions={{ height: 300, width: 300 }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
           <ForceGraphNode node={{ id: 'first-node' }} fill="red" />
           <ForceGraphNode node={{ id: 'second-node' }} fill="blue" />


          <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />


        </InteractiveForceGraph>

      </div>
    );
  }
}

export default App;
