import type { Component } from 'solid-js';
import '../styles/dialogues.css'
import fmt from '../styles/fmt';
import { ParaBreak } from '../widgs/parabreak';
import colors from '../styles/colors';
import '../styles/brew.css'
import { Link } from 'solid-app-router';


const Brew: Component = () => {

    const blue = (s: string) => {
        return (
        <p class={fmt.blueDialogueBox + fmt.margxLeft}>{s}</p>
        )
    }

  return (
    <div class={fmt.container}>

        <img class={
            "convoimg" + fmt.margTop
            }></img> 

        {blue(
            "What is bad coffee, Douglas?"
        )}

        <p class={fmt.greenDialogueBox + fmt.margtwRight}>
            That's a great question, Jim.
            <ParaBreak/>
            Truth is, there's no such thing as
            <Link 
            class={colors.deepgold}
            href='/channels/goop'>
                {` bad coffee`}
            </Link> 
            .
        </p>

        {blue(
            "That can't be right."
        )}
        
        <p class={fmt.greenDialogueBox + fmt.margtwRight}>
            I've put lemons in my beans before, you know.
            <ParaBreak/>
            <Link 
            class={colors.deepgold}
            href='/channels/goop'>
                {`Lemons`}
            </Link> 
            , gumdrops, chicory, taffy, chocolate,
            cherries, cinnamon -- why, all the 
            colors of the rainbow.
        </p>

        <p class={fmt.blueDialogueBox + fmt.margxLeft}>
            That's proper
            <Link 
            class={colors.deepgold}
            href='/channels/goop'>
                { ` disgusting` }
            </Link> 
            .
        </p>

        <p class={fmt.greenDialogueBox + fmt.margtwRight}>
            Just about the worst I've ever had was
            a tub of beans that... are you with me, Jim?
            Tub of beans I made and flavored with Blue
            Calypso.
        </p>

        {blue(
            "That sounds like bad coffee."
        )}

        <img class="nicecupimg"></img>

        {blue(
            "That's an untoward thing to say, Douglas."
        )}

        <p class={fmt.greenDialogueBox + fmt.margtwRight}>
            Like I said, no such thing as bad beans.
            <ParaBreak/>
            Fact is, I now know that sour blueberry coffee has 
            a rich, acidic sweetness. It's not very palatable.
        </p>

        {blue(
            "That's what 'bad coffee' means: unpalatable rubbish."
        )}


    </div>
  )
}

export default Brew