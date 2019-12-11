import { Person } from './person';
export class Student extends Person{
    constructor(name: string){
        super(name);
    }

    public showAge(age: number){
        console.log('Studying...')
        super.showAge(25); 
    }
}