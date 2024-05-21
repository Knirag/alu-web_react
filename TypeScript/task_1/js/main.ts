 export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; 
}

const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'New York',
    contract: true // Additional property
};

const teacher2: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
    contract: false 
};

console.log(teacher1);
console.log(teacher2);
