class Manager {
    constructor(managerName, managerID, managerEmail, managerOffice) {
       //super(managerName, managerID, managerEmail);
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