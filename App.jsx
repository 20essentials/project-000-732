import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "virtual:windi.css"

function App() {
  return (
    <div className="h-screen w-full flex flex-wrap place-content-center bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">
      <div
        className="relative"
        style={{
          width: `calc(1248px / 6)`,
          height: "208px",
          backgroundImage: "url('assets/image.avif')",
          animation: "animate 1s steps(6) infinite",
        }}
      ></div>
      <style>{`
        @keyframes animate {
          from { background-position: 0; }
          to { background-position: -1248px; }
        }
        *,*::after,*::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        }
        a { -webkit-tap-highlight-color: transparent; }
        html { scroll-behavior: smooth; scrollbar-width: thin; scrollbar-color: transparent transparent; }
        body { height: 100vh; width: 100%; display: flex; flex-wrap: wrap; place-content: center; margin:0; }
      `}</style>
    </div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
