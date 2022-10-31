class Intern {
    constructor(internName, internID, internEmail, internSchool) {
       // super(internName, internID, internEmail);
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