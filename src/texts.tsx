import headlines from "./textsHeadlines"

import { rand } from "./networkStatic"

class news {
    // map for keeping msg repetition to a minumum
    // k: headline, v: times seen
    private hlm: Map<string, number>
    private isGlitch: boolean

    private modulo: number

    constructor() {
        this.isGlitch = false
        this.modulo = 0
        this.hlm = new Map() 
        for (let i = 0; i < headlines.length; i++) {
            this.hlm.set(headlines[i], 0)
        }
    }

    private coinflip(): boolean {
        return rand(2) == 0
    }

    seenAll(): boolean {
        return this.modulo % headlines.length == 0
    }

    getGlitched(): boolean {
        return this.isGlitch
    }

    first(): string {
        const f = headlines[0]
        this.hlm.set(f, 1)
        this.modulo++
        return f
    }

    next(): string {
        if (this.coinflip()) {
            this.isGlitch = true
        }

        let str = ""

        let xSeen = [...this.hlm.values()].sort()
        const least = xSeen[0]
        let list = []
        for (let [k,v] of this.hlm) {
            if (v == least) {
                list.push(k)
            }
        }
        
        str = list[rand(list.length)]
        this.hlm.set(str, this.hlm.get(str)+1)
        this.modulo++

        if (this.seenAll()) { 
            console.log("seen 'em all pardner")
        }

        return str
    }
    
}

class staticSignal {
    blocks: string[]
    static blocks = [
        "▀", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏",
        "▐", "░", "▒", "▓", "▔", "▕", "▖", "▗", "▘", "▙", "▚", "▛", "▜", "▝", "▞", "▟",
    ]
}


export {news, staticSignal};