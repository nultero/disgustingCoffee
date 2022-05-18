import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import '../styles/dialogues.css'

import fmt from '../styles/fmt';
import colors from '../styles/colors';
import { Link } from 'solid-app-router';


const Channels: Component = () => {
  return (
    <div class={fmt.container}>

        <img class="familyimg"></img> 

        <p class={colors.crystal}>
            Why, thank you dear. I do love coffee!
        </p>
        
        <p class={fmt.dialogueBox}>
            choke on this mf poison lol
        </p>

        <p class={colors.crystal}>  
            Don't mind if I do! Nothing like a morning brew...
        </p>

        <p class={fmt.dialogueBox}>
            lmao I'm gettin this life insurance
        </p>

    </div>
  )
}

export default Channels