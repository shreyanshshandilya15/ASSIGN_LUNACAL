import AboutMe from "../AboutMe"
import Gallery from "../Gallery"
import "./Layout.css"

export default function Layout() {
  return (
    <div className="layout">
      <div className="left-pane">
        
      </div>
      <div className="right-pane">
       <AboutMe />
       <Gallery />
      </div>
    </div>
  )
}
