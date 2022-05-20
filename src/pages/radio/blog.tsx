import type { Component } from 'solid-js';
import fmt from '../../styles/fmt';
import colors from '../../styles/colors';
import { Link } from 'solid-app-router';

import "../../styles/radio.css"
import { links } from '../../links';


const Blog: Component = () => {
  return (
    <div class={fmt.container}>

        {/*
            Need a frontend directory
            to direct all this junk
        */}

        <div class={
            fmt.margTopX + 
            fmt.stdDisplayTxt + 
            colors.crystal
            }>

            {`>`}

            <Link href={links.radio.houses} class={colors.deepgold}>
                { ` The Houses That Are Cpus ` }
            </Link>

        </div>


    </div>
  )
}

export default Blog