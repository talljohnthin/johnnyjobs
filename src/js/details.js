import '../styles/app.scss';

//get selected job id from localstorage
const jobID = localStorage.getItem('selected-job');
const jobList = JSON.parse(localStorage.getItem('job-list'));

const htmlItem = document.querySelector('.job__listing');
const htmlCompany = document.querySelector('.company__data');

let formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

if (jobID) {
    let arrayFiltered = jobList.filter(e => {
        return e.JobID == jobID;
    })
    //job filter
    arrayFiltered.forEach(item => {
        const newHTMLElement = document.createElement('div');
        newHTMLElement.setAttribute('class', 'each__job row');
        newHTMLElement.innerHTML = `
            <div class="col-sm-12">
                <div class="job__title">${item.JobTitle}</div>
                <div class="job__data row">
                    <div class="text">
                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <div class="year__of__experience"> ${item.YearsOfExperience}</div>yrs of Experience
                    </div>
                    <div class="text">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        Date posted <div class="date__posted"> ${item.DatePosted}</div>
                    </div>
                </div>
                <div class="job__company row">
                    <div class="text">
                        <i class="fa fa-cube" aria-hidden="true"></i>
                        <div class="company__name">${item.CompanyName}</div>
                    </div>
                    <div class="text">
                        <i class="fa fa-map" aria-hidden="true"></i>
                        <div class="company__location">${item.Location}</div>
                    </div>
                </div>
                <div class="job__salary">Minimum pay at <i class="fa fa-usd" aria-hidden="true"></i> ${ formatNumber(item.Salary)}</div>
                <div class="job__description">${item.JobDescriptions}</div>
                <div class="jobID hidden">${item.JobID}</div>
            </div>
        `;
        htmlItem.appendChild(newHTMLElement);
    })
    //company info
    arrayFiltered.forEach(item => {
        const newHTMLElement = document.createElement('div');
        newHTMLElement.setAttribute('class', 'company__row');
        newHTMLElement.innerHTML = `
            <div class="company__name">About <span>${item.CompanyName}</span></div>
            <div class="company__descriptions"> ${item.CompanyDescriptions} </div>
            <div class="division__title">Contact</div>
            <div class="company__phone"><i class="fas fa-phone-square"></i> ${item.ContactNumber} </div>
        `;
        htmlCompany.appendChild(newHTMLElement);
    })


} else {
    window.location.href = "./index.html";
}


// submit new job applicaltion
let [jobForm, formName, formEmail, formPhone, formCover] = '';
let appliedJob = JSON.parse(localStorage.getItem('jobs-applied'));

const getFormData = () => {
    formName = document.querySelector("#job__app__name").value,
        formEmail = document.querySelector('#job__app__email').value,
        formPhone = document.querySelector('#job__app__phone').value,
        formCover = document.querySelector('#job__app__cover').value
}
const clearForm = () => {
    document.querySelector("#job__app__name").value = '',
        document.querySelector('#job__app__email').value = '',
        document.querySelector('#job__app__phone').value = '',
        document.querySelector('#job__app__cover').value = '';
}
let addNew = (jobID, name, email, phone, cover) => {
    let data = {
        jobID,
        name,
        email,
        phone,
        cover
    }
    appliedJob.push(data);
    localStorage.setItem('jobs-applied', JSON.stringify(appliedJob))
    const targetSuccess = document.getElementById('alertSuccess');
    targetSuccess.classList.add('show');
    clearForm();
    setTimeout(() => {
        targetSuccess.classList.remove('show');
    }, 4000)
}

let validate = (formEmail, formPhone, formName, formCover) => {
    let email = true,
        name = true,
        phone = true,
        message = true;

    // email regex-
    const emailRegx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    const targetEmail = document.getElementById('alertEmail');
    if (emailRegx.test(formEmail) === false) {
        email = false;
        targetEmail.classList.add('show');
    } else {
        email = true;
        targetEmail.classList.remove('show');
    }

    // phone regex-
    const phoneRegx = /^[0-9]{11,11}$/;
    const targetPhone = document.getElementById('alertPhone');
    if (phoneRegx.test(formPhone) === false) {
        phone = false;
        targetPhone.classList.add('show');
    } else {
        phone = true;
        targetPhone.classList.remove('show');
    }

    // name check if less than 2 character
    const targetName = document.getElementById('alertName');
    if (formName.length < 2) {
        name = false;
        targetName.classList.add('show');
    } else {
        name = true;
        targetName.classList.remove('show');
    }

    // cover check if less than 2 character
    const targetCover = document.getElementById('alertCover');

    if (formCover.length < 2) {
        message = false;
        targetCover.classList.add('show');
    } else {
        message = true;
        targetCover.classList.remove('show');
    }

    if (name == true && phone == true && email == true && message == true) {
        return true;
    } else {
        return false;
    }
}
document.querySelector('.job__app__form').addEventListener('submit', e => {
    e.preventDefault();
    getFormData();
    validate(formEmail, formPhone, formName, formCover);
    if (validate(formEmail, formPhone, formName, formCover)) {
        addNew(jobID, formName, formEmail, formPhone, formCover);
    }
});

