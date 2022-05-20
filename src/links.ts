class transmissions {
    static base = "/transmissions"
    static brew = transmissions.base + "/brew"
    static badCaffeine = transmissions.base + "/badCaffeine"
    static goodCaffeine = transmissions.base + "/goodCaffeine"
    static terribleCaffeine = transmissions.badCaffeine + "/terribleCaffeine"
}

class radio {
    static base = "/radio"
    static blog = radio.base + "/blog"
    static houses = radio.blog + "/houses-that-are-cpus"
}

class links {
    static transmissions = transmissions
    static radio = radio
}

export {
    links
}