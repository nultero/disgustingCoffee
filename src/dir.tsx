import { Component,lazy } from "solid-js";
import { Routes, Route } from "solid-app-router"
import { links } from "../links";

import Coffee from "./pages/Coffee";
const Channels = lazy(() => import("./pages/Channels"));
const Brew = lazy(() => import("./pages/transmissions/Brew"));
const BadCaffeine = lazy(() => import("./pages/transmissions/BadCaffeine"));

const Dir: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Coffee/>} />
      <Route path={links.transmissions.base} element={<Channels/>} />
      <Route path={links.transmissions.brew} element={<Brew/>} />
      <Route path={links.transmissions.badCaffeine} element={<BadCaffeine/>} />

      <Route path="/radio" element={<Channels/>} />
    </Routes>
  )
}
  
export default Dir