const Manager = require("./staff-files/manager");
const Engineer = require("./staff-files/engineer");
const Intern = require("./staff-files/intern");
const fs = require("fs");
const inquirer = require("inquirer");



const OBJ = {
    manager: [],
    engineer: [],
    intern: []
}

teamInit = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manName",
            message: "Enter name here"
        },
        {
            type: "input",
            name: "manID",
            message: "Enter manager ID"
        },
        {
            type: "input",
            name: "manEmail",
            message: "Enter managers Email"
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter manager office number"
        },
    ])
        .then((answers) => {
            let manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.officeNum)
            OBJ.manager.push(manager);
            nextMemb();
        })
        .catch((err) => {
            console.log(err)
        })
};

nextMemb = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextMembChoice",
            message: "Add another type of employee",
            choices: ["Manager", "Engineer", "Intern", "No more employees!"]
        }
    ]).then((answers) => {
        switch (answers.teamAdd) {
            case 'Manager':
                break;
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'All positions are filled, no need to add anymore':

        };
    })
}

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "enginName",
            message: "Enter name here"
        },
        {
            type: "input",
            name: "enginID",
            message: "Enter engineer ID"
        },
        {
            type: "input",
            name: "enginEmail",
            message: "Enter engineers Email"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter engineer GitHub username"
        }
    ])
        .then((answers) => {
            let engineer = new Engineer(answers.enginName, answers.enginId, answers.enginEmail, answers.gitHub)
            OBJ.engineer.push(engineer);
            nextMemb();
        })
        .catch((err) => {
            console.log(err)
        })
};

const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter name here"
        },
        {
            type: "input",
            name: "internID",
            message: "Enter intern ID"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter interns Email"
        },
        {
            type: "input",
            name: "intschool",
            message: "Enter intern School name"
        }
    ])
        .then((answers) => {
            let intern = new intern(answers.internName, answers.internId, answers.internEmail, answers.intschool)
            OBJ.intern.push(intern);
            nextMemb();
        })
        .catch((err) => {
            console.log(err)
        })

};

buildHTML = () => {
    return
    ` <!DOCTYPE html >
        <html lang="en">
        <head>
        <title>Employee Cards</title>
        <meta charset="UTF-8">
        <!-- link to css page -->
        <link href="./assets/style.css" rel="stylesheet">
        <!-- Materialize page -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- fontawesome -->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <!-- Google fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Warnes&display=swap" rel="stylesheet">   
        </head>
        <body>
         <h1 class="myTeamHeader center-align">MY TEAM</h1>
        <div class="container center-align">
        <div class="row">
        // manager

        // engineer

        // intern

        </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
        </html>`
};




managerCard = () => {
    return
    `
    <!-- Manager -->

    <div class="card col s4 deep-purple accent-4">
    <div class="card-image waves-effect deep-purple accent-4">
        <img class="activator" src="">
    </div>
    <div class="card-content ">
      <p class="card-title activator">  <i class="far fa-caret-square-down"></i></p>
      <p>Manager</p>
    </div>
    <div class="card-reveal cyan accent-1">
      <p class="card-title">Less Info<i class="fas fa-times-circle" style="float: right;"></i></p>
      <ul>
        <li class="manId"></li>
        <li class="manEmail"></li>
        <li class="manOffice"></li>
    </ul>  
  </div>
  </div>

  <!-- Manager -->

    `
}


engineerCard = () => {
    return
    `             
    <!-- engineer -->

     <div class="card col s4 deep-purple accent-4">
    <div class="card-image waves-effect deep-purple accent-4">
    </div>
    <div class="card-content">
      <p class="card-title outterTitle activator">  <i class="far fa-caret-square-down"></i></p>
      <p>Engineer</p>
    </div>
    <div class="card-reveal cyan accent-1">
      <p class="card-title">Less Info<i class="fas fa-times-circle" style="float: right;"></i></p>
      <ul>
        <li class="engID"></li>
        <li class="engEmail"></li>
        <li class="engGit"></li>
    </ul>
    </div>
  </div>

  <!-- engineer -->

  `
}


internCard = () => {
    return
    `
    <!-- intern -->

    <div class="card col s4 deep-purple accent-4">
    <div class="card-image waves-effect deep-purple accent-4">
    </div>
    <div class="card-content ">
      <p class="card-title intName activator">Tom Fallon  <i class="far fa-caret-square-down"></i></p>
      <p>Intern</p>
    </div>
    <div class="card-reveal cyan accent-1">
      <p class="card-title">Less Info<i class="fas fa-times-circle" style="float: right;"></i></p>
      <ul>
          <li class="intID"></li>
          <li class="intEmail"></li>
          <li class="intSchool"></li>
      </ul>
    </div>
  </div>
  </div>

  <!-- intern -->

    `
}

