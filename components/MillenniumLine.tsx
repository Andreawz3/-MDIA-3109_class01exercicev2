import { Popup, Polyline, CircleMarker } from 'react-leaflet';

const brownOptions = { color: "brown" };
const yellowOptions = { color: "yellow" };

const millenniumLine:[number, number][] = [
  [49.265753, -123.098825], // VCC–Clark
  [49.2625, -123.068889], // Commercial–Broadway
  [49.2589, -123.0454], // Renfrew
  [49.260833, -123.032778], // Rupert
  [49.26489, -123.01351], // Gilmore
  [49.2664, -123.0016], // Brentwood
  [49.26473, -122.98195], // Holdom
  [49.25914, -122.96391], // Sperling–Burnaby Lake 
  [49.25458, -122.93903], // Lake City Way
  [49.25337, -122.91815], // Production Way–University 
  [49.24846, -122.89702], // Lougheed Town Centre
  [49.26139, -122.88972], // Burquitlam
  [49.27806, -122.84579], // Moody Centre
  [49.277222, -122.827778], // Inlet Centre
  [49.273889, -122.8], // Coquitlam Central
  [49.2804, -122.7939], // Lincoln
  [49.285556, -122.791667], // Lafarge Lake–Douglas
];

const stops: { coordinate:[number, number], name:string }[] = [
  { coordinate: [49.265753, -123.098825], name: "VCC–Clark" },
  { coordinate: [49.2625, -123.068889], name: "Commercial–Broadway" },
  { coordinate: [49.2589, -123.0454], name: "Renfrew" },
  { coordinate: [49.260833, -123.032778], name: "Rupert" },
  { coordinate: [49.26489, -123.01351], name: "Gilmore" },
  { coordinate: [49.2664, -123.0016], name: "Brentwood" },
  { coordinate: [49.26473, -122.98195], name: "Holdom" },
  { coordinate: [49.25914, -122.96391], name: "Sperling–Burnaby Lake" },
  { coordinate: [49.25458, -122.93903], name: "Lake City Way" },
  { coordinate: [49.25337, -122.91815], name: "Production Way–University" }, 
  { coordinate: [49.24846, -122.89702], name: "Lougheed Town Centre" },
  { coordinate: [49.26139, -122.88972], name: "Burquitlam" },
  { coordinate: [49.27806, -122.84579], name: "Moody Centre" },
  { coordinate: [49.277222, -122.827778], name: "Inlet Centre" },
  { coordinate: [49.273889, -122.8], name: "Coquitlam Central" },
  { coordinate: [49.2804, -122.7939], name: "Lincoln" },
  { coordinate: [49.285556, -122.791667], name: "Lafarge Lake–Douglas" },
]

const MillenniumLine = () => {
  return (
    <div>
      <Polyline pathOptions={brownOptions} positions={millenniumLine}/>
      {stops && stops.map((data, index) => {
        return (
          <CircleMarker center={data.coordinate} pathOptions={yellowOptions} radius={5} key={index}>
            <Popup>{data.name}</Popup>             
          </CircleMarker>
        )
      })}
    </div>
  )
};

export default MillenniumLine;