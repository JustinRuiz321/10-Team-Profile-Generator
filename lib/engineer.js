class Engineer {
    
    //Information to be passef to the HTML file
    constructor(engineerName, engineerID, engineerEmail, engineerGithub) {
        this.engineerName = engineerName;
        this.engineerID = engineerID;
        this.engineerEmail = engineerEmail;
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
