import { Component,lazy } from "solid-js";
import { Routes, Route } from "solid-app-router"
import { links } from "./links";

import Coffee from "./pages/Coffee";
const Channels =    lazy(()=>import("./pages/Channels"));
const Brew =        lazy(()=>import("./pages/transmissions/Brew"));
const BadCaffeine = lazy(()=>import("./pages/transmissions/BadCaffeine"));
const Radio =       lazy(()=>import("./pages/Radio"));
const Blog =        lazy(()=>import("./pages/radio/blog"));
const Cpus =        lazy(()=>import("./pages/radio/blog/houses-cpus"));

const Dir: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Coffee/>} />
      <Route path={links.transmissions.base} element={<Channels/>} />
      <Route path={links.transmissions.brew} element={<Brew/>} />
      <Route path={links.transmissions.badCaffeine} element={<BadCaffeine/>} />

      <Route path={links.radio.base} element={<Radio/>} />
      <Route path={links.radio.blog} element={<Blog/>} />
      <Route path={links.radio.houses} element={<Cpus/>} />
    </Routes>
  )
}
  
export default Dir