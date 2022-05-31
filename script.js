function addnewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter your Work Experinece");

  let weOb = document.getElementById("we");
  let webuttonOb = document.getElementById("webutton");

  weOb.insertBefore(newNode, weOb.webuttonOb);

  // console.log("add new filed");
}
function addnewSkillsField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skillField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter your Skills");

  let weOb = document.getElementById("skills");
  let webuttonOb = document.getElementById("skillsbutton");

  weOb.insertBefore(newNode, weOb.webuttonOb);
}

function addnewEdField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("edField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter your Qualification");

  let weOb = document.getElementById("ed");
  let webuttonOb = document.getElementById("edbutton");

  weOb.insertBefore(newNode, weOb.webuttonOb);
}

function addnewProjectsField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("projectsField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter your Projects");

  let weOb = document.getElementById("projects");
  let webuttonOb = document.getElementById("projectsbutton");

  weOb.insertBefore(newNode, weOb.webuttonOb);
}
function addnewacField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("acField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter your Achievement");

  let weOb = document.getElementById("ac");
  let webuttonOb = document.getElementById("acbutton");

  weOb.insertBefore(newNode, weOb.webuttonOb);
}

function generateResume() {
  // console.log("generating resume");
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  //name
  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //fb link
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  //linkedin link
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value;

  // github link
  document.getElementById("githubT").innerHTML =
    document.getElementById("githubField").value;

  //education
  let eds = document.getElementsByClassName("edField");
  let str2 = "";

  for (let e of eds) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("educationT").innerHTML = str2;

  //projects
  let pts = document.getElementsByClassName("projectsField");
  let str3 = "";

  for (let e of pts) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }
  document.getElementById("projectsT").innerHTML = str3;

  //achievements
  let acs = document.getElementsByClassName("acField");
  let str4 = "";

  for (let e of acs) {
    str4 = str4 + `<li> ${e.value} </li>`;
  }
  document.getElementById("achT").innerHTML = str4;

  //work experience
  let wes = document.getElementsByClassName("weField");
  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //skills
  let sks = document.getElementsByClassName("skillField");
  let str1 = "";

  for (let e of sks) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("skillsT").innerHTML = str1;

  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-templete").style.display = "block";
}
function downloadResume() {
  //   const element= document.getElementById("resume-templete");

  //   html2pdf()
  //   .from(element)
  //   .save();
  // const content = "data:application/pdf;base64,<base64 PDF content string>";
  // const linkSource = content;
  // const downloadLink = document.getElementById("resume-templete");
  // const fileName = "resume.pdf";
  // downloadLink.href = linkSource;
  // downloadLink.download = fileName;
  // downloadLink.click();
  window.print();
}
// //   let downloadId = 2;

// //   function onResumed() {
// //     console.log(`Resumed download`);
// //   }

// //   function onError(error) {
// //     console.log(`Error: ${error}`);
// //   }

// //   let resuming = browser.downloads.resume(downloadId);
// //   resuming.then(onResumed, onError);
// }
// const download = (path, filename) => {
//    // Create a new link
//    const anchor = document.createElement('a');
//    anchor.href = path;
//    anchor.download = filename;

//    // Append to the DOM
//    document.body.appendChild(anchor);

//    // Trigger `click` event
//    anchor.click();

//    // Remove element from DOM
//    document.body.removeChild(anchor);
// };

// // Example download
// download('atta-resume.pdf', 'resume.pdf');
