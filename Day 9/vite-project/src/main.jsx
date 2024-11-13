import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Marks from "./Marks.jsx";
// import Profile from "./Profile.jsx";
import DisplayMarks from "./DisplayMarks.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Marks name={"Abh"} roll={1} m1={2} m2={3} m3={4} m4={5} m5={6}/>*/}
    <DisplayMarks />
  </StrictMode>,
)
