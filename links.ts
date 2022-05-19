class transmissions {
    static base = "/transmissions"
    static brew = transmissions.base + "/brew"
    static badCaffeine = transmissions.base + "/badCaffeine"
}

class links {
    static transmissions = transmissions
    static radio = "/radio"
}

export {
    links
}