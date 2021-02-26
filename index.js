const Manager = require("./staff-files/manager");
const Engineer = require("./staff-files/engineer");
const Intern = require("./staff-files/intern");
const inquirer = require("inquirer");
const fs = require("fs");

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

teamInit();

nextMemb = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextMembChoice",
            message: "Add another type of employee",
            choices: ["Manager", "Engineer", "Intern", "No more employees!"]
        }
    ]).then((answers) => {
        switch (answers.nextMembChoice) {
            case 'Manager':
                break;
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'All positions are filled, no need to add anymore':
                makeHTML();

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
            let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.intschool)
            OBJ.intern.push(intern);
            nextMemb();
        })
        .catch((err) => {
            console.log(err)
        })

};

buildHTML = () => {
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

        ${buildmanColl()}

        ${buildengColl()}

        ${buildInterColl()}


        </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
        </html>`
};


const makeHTML = () => {
    fs.writeFile("myteam.html", buildHTML(), (err) => {
        err ? console.log(err, "Whats going on here? :(") : console.log("Team created check myTeamGen folder")
    })
}


managerCardPush = (answers) => {
    return
    `

    <!-- Manager -->

    <div class="card col s4 deep-purple accent-4">
    <div class="card-image waves-effect deep-purple accent-4">
        <img class="activator" src="">
    </div>
    <div class="card-content ">
      <p class="card-title activator">${answers.manName}  <i class="far fa-caret-square-down"></i></p>
      <p>Manager</p>
    </div>
    <div class="card-reveal cyan accent-1">
      <p class="card-title">Less Info<i class="fas fa-times-circle" style="float: right;"></i></p>
      <ul>
        <li class="manId">${answers.manId}</li>
        <li class="manEmail">${answers.manEmail}</li>
        <li class="manOffice">${answers.officeNum}</li>
    </ul>  
  </div>
  </div>

  <!-- Manager -->


    `
}
buildmanColl = () => {
    let managerCollection = "";
    OBJ.managers.forEach(manager => {
        managerCollection += managerCardPush(manager)
    });
}


engiCardPush = (answers) => {
    return
    `             
<!-- engineer -->

 <div class="card col s4 deep-purple accent-4">
<div class="card-image waves-effect deep-purple accent-4">
</div>
<div class="card-content">
  <p class="card-title outterTitle activator">${answers.enginName}  <i class="far fa-caret-square-down"></i></p>
  <p>Engineer</p>
</div>
<div class="card-reveal cyan accent-1">
  <p class="card-title">Less Info<i class="fas fa-times-circle" style="float: right;"></i></p>
  <ul>
    <li class="engID">${answers.enginId}</li>
    <li class="engEmail">${answers.enginEmail}</li>
    <li class="engGit">${answers.gitHub}</li>
</ul>
</div>
</div>

<!-- engineer -->

`
}
buildengColl = () => {
    let engineerCollection = "";
    OBJ.engineer.forEach(engineer => {
        engineerCollection += engiCardPush(engineer)
    });
}

internCardPush = (answers) => {
    return
    `
<!-- intern -->

<div class="card col s4 deep-purple accent-4">
<div class="card-image waves-effect deep-purple accent-4">
</div>
<div class="card-content ">
  <p class="card-title intName activator">${answers.internName}  <i class="far fa-caret-square-down"></i></p>
  <p>Intern</p>
</div>
<div class="card-reveal cyan accent-1">
  <p class="card-title">Less Info<i class="fas fa-times-circle" style="float: right;"></i></p>
  <ul>
      <li class="intID">${answers.internName}</li>
      <li class="intEmail">${answers.internEmail}</li>
      <li class="intSchool">${answers.intschool}</li>
  </ul>
</div>
</div>
</div>

<!-- intern -->

`
}
buildInterColl = () => {
    let internCollection = "";
    OBJ.managers.forEach(intern => {
        internCollection += internCardPush(intern)
    });
}

