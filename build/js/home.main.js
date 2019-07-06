!function(e){var a={};function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)t.d(n,o,function(a){return e[a]}.bind(null,o));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/assets/",t(t.s=3)}([function(e,a,t){"use strict";var n=[];localStorage.getItem("job-list")?n=JSON.parse(localStorage.getItem("job-list")):(n=[{JobTitle:" Front End Developer",JobID:"1",YearsOfExperience:"2",Location:"Metro Manila, Luzon",JobDescriptions:" Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.",Salary:14e3,Category:"Front End",DatePosted:"July 11, 1991",CompanyName:"Google",CompanyDescriptions:" StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans",ContactNumber:"123456789"},{JobTitle:"Java Developer",JobID:"2",YearsOfExperience:"3",Location:"Metro Manila",JobDescriptions:" Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.",Salary:3e4,Category:"Fullstack",DatePosted:"July 11, 1991",CompanyName:"facebook",CompanyDescriptions:" StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.",ContactNumber:"123456789"},{JobTitle:" BackEnd Developer",JobID:"3",YearsOfExperience:"4",Location:"Davao, Mindanao",JobDescriptions:" Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.",Salary:4e4,Category:"Back End",DatePosted:"July 11, 1991",CompanyName:"github",CompanyDescriptions:" StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.",ContactNumber:"123456789"}],localStorage.setItem("job-list",JSON.stringify(n)),n=JSON.parse(localStorage.getItem("job-list"))),a.a=n},,,function(e,a,t){"use strict";t.r(a);t(4);var n=t(0),o=JSON.stringify([{jobID:"1",name:"Johnrel Limpag",email:"test@gmail.com",phone:"0987654321",cover:"Cover letter"},{jobID:"2",name:"Juan Dela X",email:"sample@gmail.com",phone:"0987654321",cover:"Cover letter"}]);null===localStorage.getItem("jobs-applied")&&localStorage.setItem("jobs-applied",o);var i=function(e){var a=JSON.parse(localStorage.getItem("jobs-applied")),t=Array.from(a).filter(function(a){return a.jobID==e});return t.length>0?"Total Number of Application: "+t.length:"Hurry and be the first to apply"},r=n.a,s=document.querySelector(".job__listing");r.forEach(function(e){var a=document.createElement("div");a.setAttribute("class","each__job row"),a.innerHTML='\n        <div class="box-left">\n            <div class="job__title">'.concat(e.JobTitle,'</div>\n            <div class="job__data row">\n                <div class="text">\n                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>\n                    <div class="year__of__experience">').concat(e.YearsOfExperience,'</div>yrs of Experience\n                </div>\n                <div class="text">\n                    <i class="fa fa-calendar" aria-hidden="true"></i>\n                    Date posted <div class="date__posted"> ').concat(e.DatePosted,'</div>\n                </div>\n            </div>\n            <div class="job__company row">\n                <div class="text">\n                    <i class="fa fa-cube" aria-hidden="true"></i>\n                    <div class="company__name">').concat(e.CompanyName,'</div>\n                </div>\n                <div class="text">\n                    <i class="fa fa-map" aria-hidden="true"></i>\n                    <div class="company__location">').concat(e.Location,'</div>\n                </div>\n            </div>\n        </div>\n        <div class="jobID hidden">').concat(e.JobID,'</div>\n        <div class="box-right">\n            <a href="./details.html" class="btn btn-primary btn-view"> <span>View</span> </a>\n        </div> \n        <span class="total__applied"> ').concat(i(e.JobID),"</span> \n    "),s.appendChild(a)});n.a;var c=function(){var e=document.getElementsByClassName("btn-view");Array.from(e).forEach(function(e){e.addEventListener("click",function(a){a.preventDefault();var t=e.parentElement.parentElement.querySelector(".jobID").innerText;localStorage.setItem("selected-job",t),window.location.href="./details.html",console.log(t)})})};c();var l=c;var d=document.querySelector(".filter__categories"),u=document.querySelector(".filter__salaries"),p=document.querySelector(".filter__locations"),v=function e(a,t,n){var o=this;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=a,this.target=t,this.item=n,this.data.forEach(function(e){var a=document.createElement("li");"category"==o.item?(a.innerHTML="".concat(e.category," (").concat(g(e.category,"category"),")"),a.setAttribute("data-value",e.category)):"salary"==o.item?(a.innerHTML="".concat(e.salary," (").concat(g(e.salary,"salary"),")"),a.setAttribute("data-value",e.salary)):"location"==o.item&&(a.innerHTML="".concat(e.location," (").concat(g(e.location,"location"),")"),a.setAttribute("data-value",e.location)),o.target.appendChild(a)})},m=(new v([{category:"All"},{category:"Front End"},{category:"Back End"},{category:"Fullstack"}],d,"category"),new v([{salary:15e3},{salary:2e4},{salary:3e4},{salary:4e4},{salary:5e4},{salary:6e4},{salary:7e4}],u,"salary"),new v([{location:"Metro Manila"},{location:"Cebu"},{location:"Davao"},{location:"Luzon"},{location:"Visayas"},{location:"Mindanao"}],p,"location"),null),f=document.querySelector(".job__listing");function g(e,a){var t=n.a.filter(function(o){return"category"==a?"All"==e?t=n.a.length:o.Category.includes(e):"location"==a?o.Location.includes(e):"salary"==a?o.Salary>=e:void 0});return t.length}var b=function(e,a){f.innerHTML="",a||void 0===e||(f.innerHTML='\n        <h3 class="no__job__post">No job post about this '.concat(e.toLowerCase()," at this moment!</h3>\n        ")),h(),l()},y=document.querySelectorAll(".data__filter li");Array.from(y).forEach(function(e){e.addEventListener("click",function(e){var a,t,o=e.target.parentElement.getAttribute("data-job-filter");a=o,"All"==(t=e.target.getAttribute("data-value"))&&(m=n.a,b()),"Category"==a&&"All"!=t?(m=n.a.filter(function(e){return e.Category.includes(t)}),b(a,m.length)):"Location"==a&&"All"!=t?(m=n.a.filter(function(e){return e.Location.includes(t)}),b(a,m.length)):"Salary"==a&&"All"!=t&&(m=n.a.filter(function(e){return e.Salary>=t}),b(a,m.length))})});var h=function(){null!==m&&m.forEach(function(e){var a=document.createElement("div");a.setAttribute("class","each__job row"),a.innerHTML='\n                <div class="col-sm-12 col-md-10">\n                    <div class="job__title">'.concat(e.JobTitle,'</div>\n                    <div class="job__data row">\n                        <div class="text">\n                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>\n                            <div class="year__of__experience"> ').concat(e.YearsOfExperience,'</div> yrs of Experience\n                        </div>\n                        <div class="text">\n                            <i class="fa fa-calendar" aria-hidden="true"></i>\n                            Date posted <div class="date__posted">').concat(e.DatePosted,'</div>\n                        </div>\n                    </div>\n                    <div class="job__company row">\n                        <div class="text">\n                            <i class="fa fa-cube" aria-hidden="true"></i>\n                            <div class="company__name">').concat(e.CompanyName,'</div>\n                        </div>\n                        <div class="text">\n                            <i class="fa fa-map" aria-hidden="true"></i>\n                            <div class="company__location">').concat(e.Location,'</div>\n                        </div>\n                    </div>\n                    <div class="jobID hidden">').concat(e.JobID,'</div>\n                </div>\n                <div class="col-sm-12 col-md-2 box-right">\n                    <a href="./details.html" class="btn btn-primary btn-view"> <span>View</span> </a>\n                </div>\n                <span class="total__applied"> ').concat(i(e.JobID),"</span>  \n            "),f.appendChild(a)})};n.a},function(e,a){}]);