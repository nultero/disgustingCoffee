import type { Component } from 'solid-js';
import '../styles/dialogues.css'
import fmt from '../styles/fmt';
import { ParaBreak } from '../widgs/parabreak';
import colors from '../styles/colors';
import '../styles/radio.css'
import { Link } from 'solid-app-router';
import { links } from '../links';


const Radio: Component = () => {

  return (
    <div class={fmt.container}>

        <img class={"convoimg" + fmt.margTop}></img> 

        <Link href={links.radio.blog} class={
            fmt.stdDisplayTxt + 
            colors.deepgold
        }
        >
            { `Blog` }
        </Link>

    </div>
  )
}

export default Radio