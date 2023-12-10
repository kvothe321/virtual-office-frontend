import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {WebSocketService} from "../services/web-socket.service";


@Component({
  selector: 'app-office',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css',
})
export class OfficeComponent {
  desks = Array.from({length: 6}).map((_, index) => index + 1);

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.webSocketService.connect('wss://192.168.35.182:8443/myws/real-time-position');

    this.webSocketService.messages.subscribe(msg => {
      console.log('Received message:', msg);
      // Handle received messages
    });
  }

  sendMessage(id: number, name: string): void {
    const message = {id, name}; // Example message
    this.webSocketService.sendMessage(message);
  }

  onDragStart(event: any): void {
  }

  onDragEnd(event: any): void {
    const id = Math.floor(Math.random() * 10000) + 1; // Generates a random number between 1 and 10000
    this.sendMessage(id, "test")
    console.log("Object moved")
  }
}
