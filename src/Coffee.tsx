import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import texts from './texts';
import tw from './tailwinds';
import { NetworkStatic, rand } from './networkStatic';

const CursorPipe: Component = () => {
  const p = "|"
  const [c, setc] = createSignal(p);

  setInterval(() => {
    if (c() == p) {
      setc("")
    } else {
      setc(p)
    }
  }, 500)

  return (
    <> {c()} </>
  )
}


const CoffeeMain: Component = () => {

  let idx = 0;
  let strBuf: string = ""
  let strIdx = 0

  const [headline, setheadline] = createSignal(texts.headlines[idx]);

  // get forward/back typing: 1 is forward, 0 back
  const [getfw, setfw] = createSignal(0);

  let ticks = 0

  // shell text interval
  setInterval(() => {
    // pause for some ticks once we've reached max or min len
    if (ticks != 0) {
      ticks++
      if (ticks >= 9) {
        ticks = 0
      }

    } else { //ticks == 0

      let len = headline().length
      // reset to new string if len is nil

      if (len == 0 && ticks == 0) {
        ticks++
        let i = idx
        let hl = texts.headlines.length
        while (i == idx) {
          idx = rand(hl)-1
        }
        // set the next string to 'forward' into
        strBuf = texts.headlines[idx]
        setfw(1)
      } 

    
      if (getfw()) {
        if (strIdx == strBuf.length) {
          strIdx = 0
          strBuf = ""
          setfw(0)
        } else {
          setheadline(headline() + strBuf[strIdx])
          strIdx++

          if (headline().length == strBuf.length) {
            ticks++
          }

        }
      } else { // backwd
        setheadline(headline().slice(0, headline().length-1))
        if (headline().length == 0) {
          ticks++
        }
      }
    }
  }, 230)




  // TODOO make the msg staticky
  return (
    <div class={tw.containerSty}>

      <p class={tw.matrixSty}>
        <img src={'../static/coffee.svg'} class="coffeeimg"></img> 
        $ {headline()} <CursorPipe />
      </p>


    <NetworkStatic />
      <p class={tw.matrixSty}> network static may interfere with our transmissions</p>
    </div>
  )
}

export default CoffeeMain