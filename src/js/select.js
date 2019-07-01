let setJobId = () => {
    const btnView = document.getElementsByClassName('btn-view');
    let btns = Array.from(btnView);

    btns.forEach( e => {
        e.addEventListener('click', (element)=> {
            element.preventDefault();
            let currentID = e.parentElement.parentElement.querySelector('.jobID').innerText;
            localStorage.setItem('selected-job',currentID);
            window.location.href="./details.html";
           console.log(currentID)
        })

    })
    
}

setJobId();

export default setJobId;
