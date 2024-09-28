import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../../../data/dummy-tasks';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  tasks = DUMMY_TASKS;

  isAddingTask = false;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
