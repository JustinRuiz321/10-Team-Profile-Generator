class Intern {
    constructor(internName, internID, internEmail, internSchool) {
        this.internName = internName;
        this.internID = internID;
        this.internEmail = internEmail;
        this.internSchool = internSchool;
    }
    getSchool() {
        return this.internSchool;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;