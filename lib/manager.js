class Manager {
    
    //Information to be passed to the HTML file
    constructor(managerName, managerID, managerEmail, managerOffice) {
        this.managerName = managerName;
        this.managerID = managerID;
        this.managerEmail = managerEmail;
        this.managerOffice = managerOffice;
    }
    getOfficeNumber() {
        return this.managerOffice;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
