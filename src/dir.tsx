import { Component,lazy } from "solid-js";
import { Routes, Route } from "solid-app-router"

import Coffee from "./pages/Coffee";
const Channels = lazy(() => import("./pages/Channels"));

const Dir: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Coffee/>} />

      <Route path="/channels" element={<Channels/>} />

    </Routes>
  )
}
  
export default Dir