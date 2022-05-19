import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import { News } from '../widgs/news';
import fmt from '../styles/fmt';
import colors from '../styles/colors';
import { NetworkStatic } from '../widgs/networkStatic';
import { staticSignal } from '../widgs/signals';
import { Link } from 'solid-app-router';

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

  // for storing whole string for piecemeal buildup, not for current state
  let strBuf: string = "" 
  let strIdx = 0

  let newsObj = new News()

  const [headline, setheadline] = createSignal(newsObj.first());

  // get forward/back typing: 1 is forward, 0 back
  const [getfw, setfw] = createSignal(0);

  let ticks = 0 // delay counter for when between "typing" and full strings
  const interval = 45

  // shell text interval
  setInterval(() => {
    // pause for some ticks once we've reached max or min len
    if (ticks != 0) {
      ticks++
      if (ticks >= 1.67 * interval) {
        ticks = 0
      }

    } else { //ticks == 0

      let len = headline().length
      // reset to new string if len is nil
      if (len == 0 && ticks == 0) {
        ticks++
        strBuf = newsObj.next()
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
  }, interval)




  // TODOO make the msg staticky
  return (
    <div class={fmt.container}>

      <div class={fmt.headline + fmt.stdDisplayTxt + colors.crystal}>
        <div>
        { ` news from the liminal terminal ` }

        </div>

        <img class="coffeeimg"></img> 

        {/* 
          out-of-order wonkery for these next few
          elements is hacks to keep the headline()
          string resizing from pulling / pushing
          the other elems around
          
          this was just the first way I figured out;
          probably not ideal
        */}

        { NetworkStatic(staticSignal) }
        
        <div class={fmt.networkStatic + fmt.transmissionPad}>
            <p class={fmt.headline}>
              <Link 
                class={colors.deepgold}
                href={"/transmissions"}
              >
                {` tune in `}
              </Link>
               for more transmissions
            </p>

            <hr class={colors.minimalGray}></hr>

            <p class={fmt.headline}>
              dial in on
              <Link 
                class={colors.deepgold}
                href={"/radio"}
              >
                {` reality radio `}
              </Link>
              (more serious)
            </p>
        </div>

        $ {headline()} <CursorPipe />

      </div>


    </div>
  )
}

export default CoffeeMain