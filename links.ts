class transmissions {
    static base = "/transmissions"
    static brew = transmissions.base + "/brew"
    static badCaffeine = transmissions.base + "/badCaffeine"
    static goodCaffeine = transmissions.base + "/goodCaffeine"
    static terribleCaffeine = transmissions.badCaffeine + "/terribleCaffeine"
}

class links {
    static transmissions = transmissions
    static radio = "/radio"
}

export {
    links
}