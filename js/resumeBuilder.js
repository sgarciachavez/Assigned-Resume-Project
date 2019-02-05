/*
This is empty on purpose! Your code to build the resume will go here.
 */

class Model{
  constructor(){
    this.bioData = {};
    this.educationData = {};
    this.workData = {};
    this.projectsData = {};

    this.initBioData();
    this.initEducationData();
    this.initWorkData();
    this.initProjectsData();
  }
  initProjectsData(){
    // projects: array of objects with
    //       title: string
    //       dates: string (works with a hyphen between them)
    //       description: string
    //       images: array with string urls
    // display: function taking no parameters
    let projects = [];
    let project1 = {};
    let project2 = {};
    let project3 = {};
    let project4 = {};

    project1.title = HTMLprojectTitle.replace("%data%", "IBM’s Open Source POWER Availability Tool");
    project1.dates = HTMLprojectDates.replace("%data%", "2016-2017");
    project1.description = HTMLprojectDescription.replace("%data%", "The Open Source POWER Availability Tool (OSPAT) is a search engine that was designed to help you find open source packages that are available on the IBM POWER architecture. The results provide the package name and version and the Linux distribution that supports the package.");
    //project1.images = "";
    projects.push(project1);

    project2.title = HTMLprojectTitle.replace("%data%", "Memory Game");
    project2.dates = HTMLprojectDates.replace("%data%", "12/2018");
    project2.description = HTMLprojectDescription.replace("%data%", "A Memory Game created as a project required by Udacity");
    projects.push(project2);

    project3.title = HTMLprojectTitle.replace("%data%", "Arcade Game");
    project3.dates = HTMLprojectDates.replace("%data%", "01/2019");
    project3.description = HTMLprojectDescription.replace("%data%", "Classic Arcade Game - Frogger, a project required by Udacity");
    projects.push(project3);

    project4.title = HTMLprojectTitle.replace("%data%", "Cat Clicker");
    project4.dates = HTMLprojectDates.replace("%data%", "02/2019");
    project4.description = HTMLprojectDescription.replace("%data%", "Implementing / practicing on separation of concern (MVC)");
    projects.push(project4);

    this.projectsData = projects;
  }

  initWorkData(){
    let jobs = [];
    let job1 = {};
    let job2 = {};

    let em = HTMLworkEmployer.replace("%data%", "CTG");
    job1.employer = em.replace("#", "https://www.ctg.com/");
    job1.title = HTMLworkTitle.replace("%data%", "Software Developer");
    job1.employertitle = job1.employer.concat(job1.title);
    job1.location = HTMLworkLocation.replace("%data%","San Antonio, TX - remote");
    job1.dates = HTMLworkDates.replace("%data%","06/2010-12/2017");
    let desc = 'Developed the End User Interface for a search engine for IBM’s Open Source POWER Availability Tool (OSPAT) using jQuery/JavaScript/RESTful Web Services. Key contributor to the migration of the OSPAT UI to a WordPress environment. Key contributor in the data analysis and the design of the needed JSon format consumed by the UI for new community based data import.'
    job1.description = HTMLworkDescription.replace("%data%", desc);
    jobs.push(job1);

    em = HTMLworkEmployer.replace("%data%", "IBM");
    job2.employer = em.replace("#", "https://www.ibm.com/");
    job2.title = HTMLworkTitle.replace("%data%", "Software Developer");
    job2.employertitle = job2.employer.concat(job2.title);
    job2.location = HTMLworkLocation.replace("%data%","San Antonio, TX - remote");
    job2.dates = HTMLworkDates.replace("%data%","06/1997-03/2010");
    desc = 'Led Web Metrics Project from tagging team applications to verifying Web Metrics Tooling receipt of data including converting from Surfaid and Coremetrics to new Unica’s NetInsight tool. Developed and maintained two Client Relationship Management (CRM) Applications tracking customer interactions with IBM implemented within Lotus Notes Environment complete with fully automated workflow. Served'
    job2.description = HTMLworkDescription.replace("%data%", desc);
    jobs.push(job2);

    this.workData = jobs;
  }

  initEducationData(){
    let ed = {};
    ed.schools = this.buildSchools();
    ed.onlineCourses = this.buildOnlineCourses();
    this.educationData = ed;
  }
  buildOnlineCourses(){
    let courses = [];
    let course = {};

    course.title = HTMLonlineTitle.replace("%data%", "Frontend Web Developer");
    course.school = HTMLonlineSchool.replace("%data%", "Udacity");
    course.titleschool = course.title.concat(course.school);
    course.dates = HTMLonlineDates.replace("%data%", "11/2018-02/2019");
    course.url = HTMLonlineURL.replace("%data%", "https://www.udacity.com/");
    courses.push(course);
    return courses;
  }
  buildSchools(){
    let schools = [];
    let s1 = {};
    let name = HTMLschoolName.replace("%data%", "New Mexico State University");
    s1.name = name.replace("#", "https://nmsu.edu/");
    s1.location = HTMLschoolLocation.replace("%data%", "Las Cruces, NM");
    s1.degree = HTMLschoolDegree.replace("%data%","Bachelor of Science & Bachelor of Liberal Arts");
    s1.namedegree = s1.name.concat(s1.degree);
    let majors = [];
    majors.push(HTMLschoolMajor.replace("%data%","Computer Science"));
    majors.push(HTMLschoolMajor.replace("%data%","Foreign Language - Spanish"));
    let temp = HTMLschoolMajor.replace("Major","Minor")
    majors.push(temp.replace("%data%","Mathematics"));
    s1.majors = majors;
    s1.dates = HTMLschoolDates.replace("%data%", "01/1993 - 05/1997");
    //s1.url = ;
    schools.push(s1);
    return schools;
  }
  initBioData(){
    let bio = {};
    bio.name = HTMLheaderName.replace("%data%", "Sylvia Garcia-Chavez");
    bio.role = HTMLheaderRole.replace("%data%", "Frontend Web Developer");
    bio.contacts = this.buildContact();
    bio.welcomeMessage = HTMLwelcomeMsg.replace("%data%", "Welcome to my Resume Project");

    bio.skills = this.buildSkills();
    bio.biopic = HTMLbioPic.replace("%data%","images/fry.jpg");

    this.bioData = bio;
  }
  getBio(){
    return this.bioData;
  }
  getEducation(){
    return this.educationData;
  }
  getWork(){
    return this.workData;
  }
  getProjects(){
    return this.projectsData;
  }
  buildContact(){
    let contact = {};
    //let str = HTMLcontactGeneric.replace("%contact%", "Sylvia");
    //contact.contact = str.replace("%data%", "What Data?");
    contact.mobile = HTMLmobile.replace("%data%", "210-421-6169");
    contact.email = HTMLemail.replace("%data%", "sgarciachavez@gmail.com");
    contact.github = HTMLgithub.replace("%data%", "https://github.com/sgarciachavez");
    contact.location = HTMLlocation.replace("%data%", "San Antonio, TX");
    return contact;
  }
  buildSkills(){
    let skills = [];
    skills.push(HTMLskillsStart);
    skills.push(HTMLskills.replace("%data%", "JavaScript"));
    skills.push(HTMLskills.replace("%data%", "Friendly"));
    skills.push(HTMLskills.replace("%data%", "Funny"));
    skills.push(HTMLskills.replace("%data%", "Speaks Spanish"));
    return skills;
  }
}

class View{
  construtor(){

  }
  displayBio(bio){
      $("#topContacts").before(bio.name);
      $("#topContacts").before(bio.role);
      let contact = bio.contacts;
      for(let c in contact){
        $("#topContacts").append(contact[c]);
        $("#footerContacts").append(contact[c]);
      }
      $("#topContacts").after(bio.welcomeMessage);
      $("#topContacts").after(bio.biopic);
      let skills = bio.skills;
      for(let s in skills){
        $("#header").append(skills[s]);
      }
  }
  displayEducation(education){
    $("#education").append(HTMLschoolStart);
    let schools = education.schools;
    for(let i in schools){
      let s = schools[i];
      $(".education-entry").append(s.namedegree);
      $(".education-entry").append(s.location);
      $(".education-entry").append(s.dates);
      $(".education-entry").append(s.url);
      let majors = s.majors;
      for(let m in majors){
        $(".education-entry").append(majors[m]);
      }
    }
    let courses = education.onlineCourses;

    for(let j in courses){
        let c = courses[j];
        $(".education-entry").append(c.titleschool);
        $(".education-entry").append(c.dates);
        $(".education-entry").append(c.url);

    }
  }
  displayWork(work){
    $("#workExperience").append(HTMLworkStart);
    for(let i in work){
      let job = work[i];
      $(".work-entry").append(job.employertitle);
      $(".work-entry").append(job.location);
      $(".work-entry").append(job.dates);
      $(".work-entry").append(job.description);
    }
  }
  displayProjects(projects){
    $("#projects").append(HTMLprojectStart);
    console.log(projects);
    for(let i in projects){
      let p = projects[i];
      console.log(p.title);
      $(".project-entry").append(p.title);
      $(".project-entry").append(p.dates);
      $(".project-entry").append(p.description);
    }
  }
  // project2.title = HTMLprojectTitle.replace("%data%", "Memory Game");
  // project2.dates = HTMLprojectDates.replace("%data%", "12/2018");
  // project2.description =

  displayMap(){
    $("#mapDiv").append(googleMap);
    //$("#mapDiv").append(internationalizeButton);
  }
}

class Controller{
  constructor(){

  }
  init(){
    let view = new View();
    let model = new Model();

    view.displayBio(model.getBio());
    view.displayEducation(model.getEducation());
    view.displayWork(model.getWork());
    view.displayProjects(model.getProjects());
    view.displayMap();
  }
}

let controller = new Controller();
controller.init();
