import { DaoInterface } from './dao.interface';
import { Person } from '../01-heranca/person';

export class PersonDao implements DaoInterface{
    tableName: string;    
    
    insert(person: Person): boolean {
        console.log('Inserting...', person.toString());
        return true;
    }
    update(person: Person): boolean {
        return true;
    }
    delete(id: number): boolean {
        return true;
    }
    find(id: number) {
        return null;
    }
    findAll(): [any] {
       return [new Person('Mickey')];
    }
}