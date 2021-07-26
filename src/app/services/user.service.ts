import { Subject } from 'rxjs';
import { User } from '../models/user.model';
export class UserService {

    private users: User[] = [
        {
            firstName: 'John',
            lastName: 'Smith',
            email: 'john@smith.com',
            hobbies: ['sport', 'informatique', 'cinema']
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}