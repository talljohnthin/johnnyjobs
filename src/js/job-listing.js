import data from './data.js';
import applicationTotal from './jobs-applied.js';


const source = data;

const htmlItem = document.querySelector('.job__listing');

source.forEach( item => {
    
    const newHTMLElement = document.createElement('div');
    newHTMLElement.setAttribute('class', 'each__job row');
    newHTMLElement.innerHTML = `
        <div class="box-left">
            <div class="job__title">${item.JobTitle}</div>
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
        <div class="box-right">
            <a href="./details.html" class="btn btn-primary btn-view"> <span>View</span> </a>
        </div> 
        <span class="total__applied"> ${applicationTotal(item.JobID) /* from jobs-applied */ }</span> 
    `;
    htmlItem.appendChild(newHTMLElement);
});

export default data;

