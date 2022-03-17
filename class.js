class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am having ${this.name}, I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }

    play() {
        console.log(`I am a ${this.type}`);
    }
}

const wizard0 = new Player('Navnath', 'taxidriver')
wizard0.introduce()
const wizard1 = new Wizard('Navnath', 'Programmer')
wizard1.introduce()
wizard1.play();


class Match {
    constructor(name, value) {
        this.name = name,
            this.value = value
    }

    hostMatch() {
        console.log("I can host the cricket match")
    }
}

class Play extends Match {
    constructor(name, value) {
        super(name, value)
    }

    playMatch() {
        console.log('Lets Play Match now')
    }
}

const Match1 = new Play("TestMacth", "Mumbai")
Match1.hostMatch();
Match1.playMatch();