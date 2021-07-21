import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}

  createList(title: string) {
    //send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  getLists() {
    // send a web request to get all lists
    return this.webReqService.get('lists');
  }

  getTasks(listId: string) {
    // send a web request to get all tasks of a specific list
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
}
