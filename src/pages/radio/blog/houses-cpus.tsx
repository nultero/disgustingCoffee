import type { Component } from 'solid-js';
import fmt from '../../../styles/fmt';
// import colors from '../../styles/colors';
import { Link } from 'solid-app-router';

import "../../../styles/radio.css"
import colors from '../../../styles/colors';
import { ParaBreak } from '../../../widgs/parabreak';
// import { ParaBreak } from '../../widgs/parabreak';
// import { links } from '../../links';


const HouseCpu: Component = () => {

  const text = (s: string) => {
    return (
    <p class={fmt.blog.lightweight + colors.lightGray}>{s}
    <ParaBreak/>
    </p>
    )
}

  return (
    <div class={fmt.container}>

        <img class={"pighouseimg" + fmt.margTop}></img> 

        <div class={fmt.blog.titlebar + colors.lightGray}>
          The Houses That Are CPUs
        </div>
          <div class={fmt.blog.subhead + colors.lightGray}>
            written 19 May 2022
          </div>

        <ParaBreak/>

        {text(`
          A millisecond.
        `)}
        
        {text(`
          A single millisecond is a very long time to modern
          CPUs. They are unbelievably fast. They are so incredibly
          fast that almost everything they interact with seems slow
          by comparison.
        `)}
        
        {/*

        TODOOOO italicizing func in widgs
        
        */}
        <p class={fmt.blog.lightweight + colors.lightGray}>
          Reaching out to RAM for any chunky data *<em>on the same machine</em>*
          as the CPU adds milliseconds.
          <ParaBreak/>
        </p>


        {text(`
          That's overhead.
        `)}

        {/*
          TODOOOO pretty happy with the overall format
          but the text width breaks on mobile viewport sizes
        */}


    </div>
  )
}

export default HouseCpu