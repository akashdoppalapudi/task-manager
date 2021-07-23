import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { List } from './models/list.model';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}

  getLists(): Observable<List[]> {
    // send a web request to get all lists
    return this.webReqService.get('lists');
  }

  createList(title: string): Observable<List> {
    // send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  getTasks(listId: string): Observable<Task[]> {
    // send a web request to get all tasks of a specific list
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string): Observable<Task> {
    // send a web request to create a task in list (specified by listId)
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  completeTask(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed,
    });
  }
}
