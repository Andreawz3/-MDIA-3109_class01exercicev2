import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("../../components/Map"), {ssr: false});

export default function Home() {
  return (
    <div>
      <div>
        <h1>Skytrain Line & Stop</h1>
      </div>
      <DynamicMap />    
    </div>
  )
}