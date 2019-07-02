let data = [];
if (!localStorage.getItem('job-list')) {
    data = [
        {
            JobTitle: ' Front End Developer',
            JobID:'1',
            YearsOfExperience: '2',
            Location: 'Metro Manila, Luzon',
            JobDescriptions : ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',
            Salary: 14000,
            Category: 'Front End',
            DatePosted: 'July 11, 1991',
            CompanyName: 'Google',
            CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans',
            ContactNumber: '123456789'
        },
        {
            JobTitle: 'Java Developer',
            JobID:'2',
            YearsOfExperience: '3',
            Location: 'Metro Manila',
            JobDescriptions : ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',
            Salary: 30000,
            Category: 'Fullstack',
            DatePosted: 'July 11, 1991',
            CompanyName: 'facebook',
            CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',
            ContactNumber: '123456789'
        },
        {
            JobTitle: ' BackEnd Developer',
            JobID:'3',
            YearsOfExperience: '4',
            Location: 'Davao, Mindanao',
            JobDescriptions : ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',
            Salary: 40000,
            Category: 'Back End',
            DatePosted: 'July 11, 1991',
            CompanyName: 'github',
            CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',
            ContactNumber: '123456789'
        }
    ]
    localStorage.setItem('job-list', JSON.stringify(data));
    data = JSON.parse(localStorage.getItem('job-list'));
} else {
    data = JSON.parse(localStorage.getItem('job-list'));
}

export default data;



