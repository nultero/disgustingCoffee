import headlines from "./textsHeadlines"

import { rand } from "./networkStatic"

class news {
    // map for keeping msg repetition to a minumum
    // k: headline, v: times seen
    private hlm: Map<string, number>

    constructor() {
        this.hlm = new Map() 
        for (let i = 0; i < headlines.length; i++) {
            this.hlm.set(headlines[i], 0)
        }
    }

    private coinflip(): boolean {
        return rand(1) == 0
    }

    first(): string {
        const f = headlines[0]
        this.hlm.set(f, 1)
        return f
    }

    next(): string {
        let str = ""
        if (this.coinflip()) {
            let xSeen = [...this.hlm.values()].sort()
            const least = xSeen[0]
            for (let s of this.hlm.keys()) {
                if (this.hlm.get(s) == least) {
                    this.hlm.set(s, this.hlm.get(s)+1)
                    str = s
                    break
                 }
            }
        } else {
            let i = rand(headlines.length)-1
            str = headlines[i]
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