const generateHTML = teamProfiles => {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://kit.fontawesome.com/164afc97fd.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <section class="container-fluid bg-danger">
            <section class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team Profiles</h1>
                </div>
            </section>
        </section>
   
        <section class="container col-12 p-3">
            <div class="row d-flex justify-content-center">
            
                 ${teamProfiles}
            </div>
        
        </section>
    </body>
    
</html>
`
}

// Creating an array get cards to page 
const generateTeamPage = team => {
    const teamSections = [];
    for (let i = 0; team.length > i; i++) {
        const departmentProfile = team[i];
        const departmentRole = departmentProfile.getRole();
console.log("role", departmentRole)
        if (departmentRole === 'Manager') {
            const manager = managerInfo(departmentProfile);
            teamSections.push(manager);
        }

        if (departmentRole === 'Engineer') {
            const engineer = engineerInfo(departmentProfile);
            teamSections.push(engineer);
        }

        if (departmentRole === 'Intern') {
            const intern = internInfo(departmentProfile);
            teamSections.push(intern);
        }
    }
    const teamProfiles = teamSections.join('');
    return generateHTML(teamProfiles);

}

const managerInfo = manager => {
    return `
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2>${manager.managerName}</h2>
            <h3>Manager</h3>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.managerID}</li>
                <li class="list-group-item">Email: <a
                    href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
                <li class="list-group-item">Office number: ${manager.managerOffice} </li>
            </ul>
        </section>
    </section>
    `
};

const engineerInfo = engineer => {
    return `
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2>${engineer.engineerName}</h2>
            <h3>Engineer</h3>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.engineerID}</li>
                <li class="list-group-item">Email: <a
                    href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.engineerGithub}">${engineer.engineerGithub}</a>
                </li>
            </ul>
        </section>
    </section>
    `
};

const internInfo = intern => {
    return `
    <div class="card col-3 m-3">
         <div class="card-header">
            <h2 class="card-title">${intern.internName}</h2>
            <h3 class="card-title">Intern</h3>
        </div>
        <div class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.internID}</li>
                <li class="list-group-item">Email: <a
                href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
                <li class="list-group-item">School: ${intern.internSchool}</li>
            </ul>
         </div>
    </div>
 `
};

module.exports = generateTeamPage;