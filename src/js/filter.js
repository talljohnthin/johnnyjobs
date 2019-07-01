import data from './data.js'; 
import setJobId from './select.js';
import { categories, salaries, locations } from './data-filter.js';
import applicationTotal from './jobs-applied.js';

const filterCategories = document.querySelector('.filter__categories'),
      filterSalaries = document.querySelector('.filter__salaries'),
      filterLocations = document.querySelector('.filter__locations');

class Filter {
    constructor( data, target,  item) {
        this.data = data;
        this.target = target;
        this.item = item;

        this.data.forEach( item => {
            let newListElement = document.createElement('li');
            if ( this.item == "category" ) {
                newListElement.innerHTML = `${item.category} (${noOfJobList(item.category, 'category')})`;
                newListElement.setAttribute('data-value', item.category);
            } else if ( this.item == "salary" ) {
                newListElement.innerHTML = `${item.salary} (${noOfJobList(item.salary,  'salary')})`;
                newListElement.setAttribute('data-value', item.salary);
            } else if ( this.item == "location" ) {
                newListElement.innerHTML = `${item.location} (${noOfJobList(item.location,  'location')})`;
                newListElement.setAttribute('data-value', item.location);
            } 
            this.target.appendChild(newListElement);
        })
    }
}
//populate aside filter 
let populateCategories = new Filter(categories, filterCategories, 'category');
let populateSalaries = new Filter(salaries, filterSalaries, 'salary');
let populateLocations = new Filter(locations, filterLocations, 'location');

//update listing base on the seclected filter
let source = null;
const htmlItem = document.querySelector('.job__listing');

let checkFilter = (target, value) => {
    if (value == 'All') {
        source = data;
        updateList();
    }
    
    if ( target == 'Category' && value != 'All') {
        source = data.filter( item => {
            return item.Category.includes(value)
        });
        updateList(target, source.length);
    } else if ( target == 'Location' && value != 'All') {
        source = data.filter( item => {
            return item.Location.includes(value)
        });
        updateList(target, source.length);
    } else if ( target == 'Salary' && value != 'All') {
        source = data.filter( item => {
            return item.Salary >= value;
        });
        updateList(target, source.length);
    }
}

//update number of job list per item category
function noOfJobList (currentItem, targetFilter) {
    let noOfFilterItem = data.filter( item => {
        if (targetFilter == 'category') {
            if(currentItem == 'All') {
                return noOfFilterItem = data.length;
            }
            return item.Category.includes(currentItem);
        } else if (targetFilter == 'location') {
            return item.Location.includes(currentItem);
        } else if (targetFilter == 'salary') {
            return item.Salary >= currentItem;
        } 
    })
    return noOfFilterItem.length;
}

//set a reset
const updateList = (target, sourceLength) => {
    //remove all data
    htmlItem.innerHTML = '';
    //if no job found
    if(!sourceLength && target !== undefined) {
        htmlItem.innerHTML = `
        <h3 class="no__job__post">No job post about this ${ target.toLowerCase() } at this moment!</h3>
        `
    }
    //create new list base on filter
    createList();

    // attach btn view code
    setJobId();
}

const filterItem = document.querySelectorAll('.data__filter li');

Array.from(filterItem).forEach( item => {
    item.addEventListener('click', e => {
        let parentAttribute = e.target.parentElement.getAttribute('data-job-filter');
        //populate filter
        checkFilter(parentAttribute, e.target.getAttribute('data-value'));
    })
})

let createList = () => {
    if (source !== null) {
        source.forEach( item => {
            const newHTMLElement = document.createElement('div');
            newHTMLElement.setAttribute('class', 'each__job row');
            newHTMLElement.innerHTML = `
                <div class="col-xs-12 col-md-10">
                    <div class="job__title">${item.JobTitle} <span class="total__applied">${applicationTotal(item.JobID) /* from jobs-applied */ }</span></div>
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
                    <div class="jobID hidden">${item.JobID}</div>
                </div>
                <div class="col-xs-12 col-md-2">
                <a href="./details.html" class="btn btn-primary btn-view"> View </a>
                </div>   
            `;
            htmlItem.appendChild(newHTMLElement);
        });
    }
}


export default data;