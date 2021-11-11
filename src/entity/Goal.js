class Goal {
    constructor(goal) {
        this.id = crypto.randomUUID();
        this.goal = goal;
    }
}

export default Goal;