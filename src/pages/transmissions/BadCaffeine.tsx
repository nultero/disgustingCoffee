import type { Component } from 'solid-js';
import '../../styles/dialogues.css'
import fmt from '../../styles/fmt';
import { ParaBreak } from '../../widgs/parabreak';
import colors from '../../styles/colors';
import '../../styles/brew.css'
import { Link } from 'solid-app-router';


const BadCaffeine: Component = () => {

    // const blue = (s: string) => {
    //     return (
    //     <p class={fmt.blueDialogueBox + fmt.margxLeft}>{s}</p>
    //     )
    // }

  return (
    <div class={fmt.container}>

        <img class={
            "convoimg" + fmt.margTop
            }></img> 

    </div>
  )
}

export default BadCaffeine