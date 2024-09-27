import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from '../data/dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
import { User } from './components/user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(): User | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  selectUser(id: string) {
    this.selectedUserId = id;
  }
}
