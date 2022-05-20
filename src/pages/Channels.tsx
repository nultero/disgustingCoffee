import type { Component } from 'solid-js';

import '../styles/dialogues.css'
import fmt from '../styles/fmt';
import colors from '../styles/colors';
import { Link } from 'solid-app-router';
import { links } from '../links';

import { ParaBreak } from '../widgs/parabreak';
import { NetworkStatic } from '../widgs/networkStatic'
import { flimsySignal } from '../widgs/signals'
import { PageEnd } from '../widgs/pageEnd';


const Channels: Component = () => {

    const blue = (s: string) => {
        return (
            <p class={colors.crystal}>{s}</p>
        )
    }
    const green = (s: string) => {
        return (
            <p class={fmt.greenDialogueBox + fmt.margtwRight}>{s}</p>
        )
    }


  return (
    <div class={fmt.container}>

        <img class="familyimg"></img> 

        {blue(
            "Why, thank you dear. I do love coffee!"
        )}

        {green(
            "choke on this mf poison lol"
        )}

        <p class={colors.crystal}>  
            Don't mind if I do! Nothing like a 
                <Link 
                class={colors.deepgold}
                href={links.transmissions.brew}>
                    morning brew...
                </Link>
        </p>

        {green(
            "lmao I'm gettin this life insurance"
        )}


        { NetworkStatic(flimsySignal) }

        <ParaBreak />

        <ParaBreak />

        <img class="marthaimg"></img>

        {blue(
            "Margaret, I know you tried to poison me."
        )}

        {green(
            "lmao get rekt scrub"
        )}

        <PageEnd/>

    </div>
  )
}

export default Channels