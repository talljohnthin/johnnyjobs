import data from './data.js';
import '../styles/app.scss';

// Add Job
let [JobTitle, YearsOfExperience, Location,
    JobDescriptions, Salary, Category,
    CompanyName, CompanyDescriptions, ContactNumber] = '';

    let job_list = JSON.parse(localStorage.getItem('job-list'));

const getFormData = () => {
    JobTitle = document.querySelector("#job__title").value;
    YearsOfExperience = document.querySelector('#job__years__exp').value;
    Location = document.querySelector('#formLocation').value;
    JobDescriptions = document.querySelector('#job__descriptions').value;
    Salary = document.querySelector('#formSalary').value;
    Category = document.querySelector('#formCategory').value;
    CompanyName = document.querySelector('#job__company').value;
    CompanyDescriptions = document.querySelector('#job__company__descriptions').value;
    ContactNumber = document.querySelector('#job__company__phone').value;
}

const clearForm = () => {
    document.querySelector("#job__title").value = '';
    document.querySelector('#job__years__exp').value = '';
    document.querySelector('#formLocation').value = '';
    document.querySelector('#job__descriptions').value = '';
    document.querySelector('#formSalary').value = '';
    document.querySelector('#formCategory').value = '';
    document.querySelector('#job__company').value = '';
    document.querySelector('#job__company__descriptions').value = '';
    document.querySelector('#job__company__phone').value = '';
}

let addNew = (JobTitle, YearsOfExperience, Location,
    JobDescriptions, Salary, Category,
    CompanyName, CompanyDescriptions, ContactNumber) => {

    let job_list = JSON.parse(localStorage.getItem('job-list'));

    let jobIDArray = job_list.map(e => {
        return parseInt(e.JobID);
    })

    const last_id = Math.max(...jobIDArray);

    let newJob = {
        JobTitle,
        JobID: last_id + 1,
        YearsOfExperience,
        Location,
        JobDescriptions,
        Salary,
        Category,
        DatePosted: new Date().toLocaleDateString("en-US"),
        CompanyName,
        CompanyDescriptions,
        ContactNumber
    }
   
    const jobList = Array.from(job_list);
    jobList.push(newJob);
    localStorage.setItem('job-list', JSON.stringify(jobList))
    console.log(JSON.parse(localStorage.getItem('job-list')));
    // const targetSuccess = document.getElementById('alertSuccess');
    // targetSuccess.classList.add('show');
    // clearForm();
    // setTimeout(()=> {
    //     targetSuccess.classList.remove('show');
    // }, 4000)
}

document.querySelector('.btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    getFormData();
    addNew(JobTitle, YearsOfExperience, Location, JobDescriptions, Salary, Category, CompanyName, CompanyDescriptions, ContactNumber)
})