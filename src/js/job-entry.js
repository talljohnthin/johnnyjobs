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

let validate = (job_title, years_of_experience, job__descriptions, company_name, company_descriptions, company_phone) => {
    
        let title = true,
            experience = true,
            job__desc = true,
            company = true,
            company_desc = true,
            phone = true;

    const checkLen = ( alertTarget, input, isValid ) => {
        const alert = document.getElementById(alertTarget);
        if ( input.length < 2 ) {
            isValid = false;
            alert.classList.add('show');
        } else {
            isValid = true;
            alert.classList.remove('show');
        }
    }

    const checkNum = /^[0-9]$/;
    const targetExperience = document.getElementById('alertYearExp');
    if ( !checkNum.test(years_of_experience) ) {
        experience = false;
        targetExperience.classList.add('show');
    } else {
        experience = true;
        targetExperience.classList.remove('show');
    }

    // phone regex-
    const phoneRegx = /^[0-9]{11,11}$/;
    const targetPhone = document.getElementById('alertCompanyPhone');
    if ( phoneRegx.test(company_phone) === false ) {
        phone = false;
        targetPhone.classList.add('show');
    } else {
        phone = true;
        targetPhone.classList.remove('show');
    }

    // check if less than 2 character
    checkLen( 'alertTitle', job_title, title );
    checkLen( 'alertCompany' , company_name, company );
    checkLen( 'alertJobDescriptions' , job__descriptions, job__desc );
    checkLen( 'alertCompanyDescriptions' , company_descriptions, company_desc );

    if ( title == true && experience == true && job__desc == true && company == true && company_desc == true && phone == true ) {
        return true;
    } else {
        return false;
    }
   
}

document.querySelector('.btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    getFormData();
    validate(JobTitle, YearsOfExperience, JobDescriptions, CompanyName, CompanyDescriptions, ContactNumber);
    if ( validate(JobTitle, YearsOfExperience, JobDescriptions, CompanyName, CompanyDescriptions, ContactNumber)) {
        addNew(JobTitle, YearsOfExperience, Location, JobDescriptions, Salary, Category, CompanyName, CompanyDescriptions, ContactNumber)
    }
})