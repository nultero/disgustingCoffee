import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { signal } from './signals'

import fmt from '../styles/fmt';
import colors from '../styles/colors';


function rand(i: number) : number {
  return Math.round(Math.random() * i) 
}

/// Signal passed in as parameters determines blocks
/// that pass in the channel.
const NetworkStatic: Function = (ss: signal) => {

    let randBlocks: Function = () => {
        let s: string = ""
        let len = ss.blocks.length
        for (let i = 0; i < len; i++) {
          s += randblt()
        }
        return s
      }

    const [txt, setTxt] = createSignal(randBlocks());
    
      function randblt(): string {
        return ss.blocks[rand(ss.blocks.length-1)]
      }

    function elideBlock(s: string) : string {
        s = s.slice(1)
        s += randblt()
        return s
      }

    // green wave
    // TODOOO make this all connected -- difficult, but
    // visually satisfying
    setInterval(() => {
      setTxt(elideBlock(txt()))
    }, 340)

    return (    
          <p class={colors.crystal + fmt.networkStatic}>{txt()}</p>
      )
}

export {
  NetworkStatic,
  rand,
}

