import { Popup, Polyline, CircleMarker } from 'react-leaflet';

const blueOptions = { color: "blue" };
const redOptions = { color: "red" };

const coordinate:[number, number][][] = [
  [
    [49.2856, -123.1115], // Waterfront
    [49.2855, -123.1201], // Burrard
    [49.2833, -123.1161], // Granville 
    [49.2796, -123.1098], // Stadium–Chinatown
    [49.2732, -123.1003], // Main Street–Science World
    [49.2626, -123.068889], // Commercial–Broadway
    [49.2483, -123.0559], // Nanaimo
    [49.2443, -123.0461], // 29th Avenue
    [49.2384, -123.0318], // Joyce–Collingwood
    [49.2298, -123.0127], // Patterson
    [49.2258, -123.0039], // Metrotown
    [49.2201, -122.9885], // Royal Oak
    [49.2123, -122.9592], // Edmonds
    [49.2000, -122.9490], // 22nd Street
    [49.2015, -122.9126], // New Westminster 
    [49.2048, -122.9061], // Columbia
    [49.2247, -122.8894], // Sapperton
    [49.2333, -122.8829], // Braid
    [49.24846, -122.89702], // Lougheed Town Centre
    [49.25337, -122.91815], // Production Way–University 
  ],
  [
    [49.2048, -122.9061], // Columbia
    [49.204444, -122.874167], // Scott Road
    [49.1990, -122.8507], // Gateway
    [49.1896, -122.8480], // Surrey Central
    [49.1828, -122.8448] // King George
  ]
];

const stops: { coordinate:[number, number], name:string }[][] = [
  [
    { coordinate: [49.2856, -123.1115], name: "Waterfront" },
    { coordinate: [49.2855, -123.1201], name: "Burrard" },
    { coordinate: [49.2833, -123.1161], name: "Granville" },
    { coordinate: [49.2796, -123.1098], name: "Stadium–Chinatown" },
    { coordinate: [49.2732, -123.1003], name: "Main Street–Science World" },
    { coordinate: [49.2626, -123.068889], name: "Commercial–Broadway" },
    { coordinate: [49.2483, -123.0559], name: "Nanaimo" },
    { coordinate: [49.2443, -123.0461], name: "29th Avenue" },
    { coordinate: [49.2384, -123.0318], name: "Joyce–Collingwood" },
    { coordinate: [49.2298, -123.0127], name: "Patterson" },
    { coordinate: [49.2258, -123.0039], name: "Metrotown" },
    { coordinate: [49.2201, -122.9885], name: "Royal Oak" },
    { coordinate: [49.2123, -122.9592], name: "Edmonds" },
    { coordinate: [49.2000, -122.9490], name: "22nd Street" },
    { coordinate: [49.2015, -122.9126], name: "New Westminster" },
    { coordinate: [49.2048, -122.9061], name: "Columbia" }, 
    { coordinate: [49.2247, -122.8894], name: "Sapperton" },
    { coordinate: [49.2333, -122.8829], name: "Braid" },
    { coordinate: [49.24846, -122.89702], name: "Lougheed Town Centre" },
    { coordinate: [49.25337, -122.91815], name: "Production Way–University" },
  ],
  [
    { coordinate: [49.2048, -122.9061], name: "Columbia" },
    { coordinate: [49.204444, -122.874167], name: "Scott Road" },
    { coordinate: [49.1990, -122.8507], name: "Gateway" },
    { coordinate: [49.1896, -122.8480], name: "Surrey Central" },
    { coordinate: [49.1828, -122.8448], name: "King George" },
  ] 
];

const ExpoLine = () => {
  return (
    <div>
      <Polyline pathOptions={blueOptions} positions={coordinate}/>
      {stops && stops[0].map((data, index) => {
        return (
          <CircleMarker center={data.coordinate} pathOptions={redOptions} radius={5} key={index}>
            <Popup>{data.name}</Popup>             
          </CircleMarker>
        )
      })}
      {stops && stops[1].map((data, index) => {
        return (
          <CircleMarker center={data.coordinate} pathOptions={redOptions} radius={5} key={index}>
            <Popup>{data.name}</Popup>
          </CircleMarker>
        )
      })}
    </div>
  )
}

export default ExpoLine;