import type { Component } from 'solid-js';
import fmt from '../../styles/fmt';
import colors from '../../styles/colors';
import { Link } from 'solid-app-router';

import "../../styles/transmissions.css"
import "../../styles/dialogues.css"
import { ParaBreak } from '../../widgs/parabreak';
import { links } from '../../links';


const BadCaffeine: Component = () => {
  return (
    <div class={fmt.container}>

        <img class={
            "fishhorrorimg" + fmt.margTop
            }></img> 

        <p class={
          fmt.redDialogueBox
          }>
            get out now

            <ParaBreak/>


            you won't believe what's in there

        </p>

        <p class={fmt.headline + fmt.stdDisplayTxt}>
              <Link 
                class={colors.deepgold}
                href={links.transmissions.terribleCaffeine}
              >
                {` see bad coffee anyway `}
              </Link>
            </p>

    </div>
  )
}

export default BadCaffeine