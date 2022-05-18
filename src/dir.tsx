import { Component,lazy } from "solid-js";
import { Routes, Route } from "solid-app-router"

import Coffee from "./pages/Coffee";
const Channels = lazy(() => import("./pages/Channels"));
const Brew = lazy(() => import("./pages/Brew")); 

const Dir: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Coffee/>} />
      <Route path="/channels" element={<Channels/>} />
      <Route path="/channels/brew" element={<Brew/>} />
      <Route path="/channels/goop" element={<Brew/>} />

    </Routes>
  )
}
  
export default Dir