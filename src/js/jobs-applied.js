// Create and fill sample applied jobs
const totalApplied = JSON.stringify([{"jobID":"1","name":"Johnrel Limpag","email":"test@gmail.com","phone":"0987654321","cover":"Cover letter"},{"jobID":"2","name":"Juan Dela X","email":"sample@gmail.com","phone":"0987654321","cover":"Cover letter"}]);
if ( localStorage.getItem("jobs-applied") === null ) localStorage.setItem('jobs-applied', totalApplied);

// count total applied for each job
let applicationTotal = id => {
    let applicationStorage = JSON.parse(localStorage.getItem("jobs-applied")),
        newApplicationStorage = Array.from(applicationStorage),
        totalApplied = newApplicationStorage.filter( e => {
        return e.jobID == id;
    })
    return totalApplied.length > 0 ? 'Total Number of Application: ' + totalApplied.length : 'Hurry and be the first to apply';
}

export default applicationTotal;