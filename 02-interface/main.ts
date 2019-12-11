import { PersonDao } from './person-dao';
import { DaoInterface } from "./dao.interface";
import { Person } from '../01-heranca/person';

let personDao : DaoInterface = new PersonDao();

 let person: Person = new Person('Anderson');

personDao.insert(person);