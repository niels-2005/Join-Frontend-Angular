import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor() { }

  getTasks(): Observable<any> {
    const myHeaders = new Headers();
    const token = localStorage.getItem('token');
    myHeaders.append("Authorization", `Token ce7ec33f2e134130748df55fc7dd7f27a6089b14`);
    console.log(myHeaders);

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const url = "http://127.0.0.1:8000/api/join/tasks";

    return new Observable((subscriber) => {
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
          subscriber.next(result);
          subscriber.complete();
        })
        .catch(error => {
          subscriber.error(error);
        });
    });
  }

  updateStatus(taskId: number, newStatus: string): Observable<any> {
    const myHeaders = new Headers();
    const token = localStorage.getItem('token');
    myHeaders.append("Authorization", `Token ce7ec33f2e134130748df55fc7dd7f27a6089b14`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify({ status: newStatus }),
      redirect: 'follow'
    };

    const url = `http://127.0.0.1:8000/api/join/tasks/${taskId}/`;

    return new Observable((subscriber) => {
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
          subscriber.next(result);
          subscriber.complete();
        })
        .catch(error => {
          subscriber.error(error);
        });
    });
  }

  filterTasksByStatus(tasks: any[], status: string): any[] {
    return tasks.filter((task) => task.status === status);
  }

}
