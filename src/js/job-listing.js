import data from './data.js';
import applicationTotal from './jobs-applied.js';


const source = data;

const htmlItem = document.querySelector('.job__listing');

source.forEach( item => {
    
    const newHTMLElement = document.createElement('div');
    newHTMLElement.setAttribute('class', 'each__job row');
    newHTMLElement.innerHTML = `
        <div class="col-xs-12 col-md-10">
            <div class="job__title">${item.JobTitle} <span class="total__applied"> ${applicationTotal(item.JobID) /* from jobs-applied */ }</span></div>
            <div class="job__data row">
                <div class="text">
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                    <div class="year__of__experience">${item.YearsOfExperience}</div>yrs of Experience
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
        </div>
        <div class="jobID hidden">${item.JobID}</div>
        <div class="col-xs-12 col-md-2">
        <a href="./details.html" class="btn btn-primary btn-view"> View </a>
        </div>   
    `;
    htmlItem.appendChild(newHTMLElement);
});

export default data;

