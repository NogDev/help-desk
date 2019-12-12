import { Person } from '../01-heranca/person';
import { DaoInterface } from './dao.interface';
import { Dao } from './dao';


let dao: DaoInterface<Person> = new Dao<Person>();
let person: Person = new Person('Wolverine');

dao.insert(person);