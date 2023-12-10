import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket?: WebSocket;
  private messageSubject: Subject<any> = new Subject();
  public messages: Observable<any> = this.messageSubject.asObservable();

  constructor() {
  }

  public connect(url: string): void {
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.messageSubject.next(data);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  public sendMessage(message: any): void {
    if (this.socket) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('Socket is not initialized.');
    }
  }
}
