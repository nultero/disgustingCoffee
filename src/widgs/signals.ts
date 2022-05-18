interface signal {
    blocks: string[]
}

class staticSignal implements signal {
    blocks: string[]
    static blocks: string[] = [
        "▀", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏",
        "▐", "░", "▒", "▓", "▔", "▕", "▖", "▗", "▘", "▙", "▚", "▛", "▜", "▝", "▞", "▟",
    ]
}

class flimsySignal implements signal {
    blocks: string[]
    static blocks = [
        "▁", "▂", "▃", "<", ">", "▌", "▍", "▎", "▏",
        "░", "▒", "▓", "▔", "▕", "▖", "▗", "▘",
        "▁", "▂", "▃", ">", "<", "▌", "▍", "▎", "▏",
        "➣", "➤","➣", "➤","➣", "➤","➣", "➤","➣", "➤","➣", "➤","➣", "➤",
    ]
}

export {
    signal,
    staticSignal,
    flimsySignal
}