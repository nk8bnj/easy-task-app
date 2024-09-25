import { Component, Input } from '@angular/core';
import { User } from '../../../types/user.interface';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../../../data/dummy-tasks';
import { Task } from '../../../types/task.interface';

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
