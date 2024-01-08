import dynamic from "next/dynamic";
import trainLogo  from '../../public/train-logo.png'

const DynamicMap = dynamic(() => import("../../components/Map"), {ssr: false});

export default function Home() {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{display:'flex', gap:"1em", alignItems:"center", padding:"1em"}}>
        <img src={trainLogo.src} alt="train-logo" style={{width:"3em"}}/>
        <h1 style={{fontFamily:"monospace", fontSize:"1.5em"}}>SkyTrain Network</h1>
        </div>
        <div style={{display:"flex", flexDirection: "column", gap:"0.5em", marginRight: "1em"}}>
          <p style={{fontFamily:"monospace", padding:"0.3em", backgroundColor:"blue"}}>Expo Line</p>
          <p style={{fontFamily:"monospace", padding:"0.3em", backgroundColor:"brown"}}>Millennium Line</p>
        </div>
      </div>
      <DynamicMap />    
    </div>
  )
}