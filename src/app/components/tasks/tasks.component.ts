import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../../../data/dummy-tasks';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  tasks = DUMMY_TASKS;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }
}
