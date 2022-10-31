class Engineer {
    
    constructor(engineerName, engineerID, engineerEmail, engineerGithub) {
       // super(engineerName, engineerID, engineerEmail);
        this.engineerGithub = engineerGithub;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.engineerGithub;
    }
}

module.exports = Engineer;