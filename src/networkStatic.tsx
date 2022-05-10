import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import  { staticSignal } from './texts';
import tw from './tailwinds';

function rand(i: number) : number {
  return Math.round(Math.random() * i) 
}

const NetworkStatic: Component = () => {
    const ss = staticSignal

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
          <p class={tw.matrixSty + " networkstatic"}>{txt()}</p>
      )
}

export {
  NetworkStatic,
  rand,
}

