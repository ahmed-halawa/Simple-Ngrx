import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import * as socketio from 'socket.io-client';
import { environment } from '../../../environments/environment';

// Low level socket service api (based on rxjs)

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket;
  connected$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.socket = socketio(
      environment.socket.baseUrl,
      environment.socket.config
    );
    this.socket.on('connect', () => this.connected$.next(true));
    this.socket.on('disconnect', () => this.connected$.next(false));
  }

  join(room: string) {
    // auto rejoin after reconnect mechanism
    this.connected$.subscribe(connected => {
      if (connected) {
        this.socket.emit('join', { room });
      }
    });
  }

  disconnect() {
    this.socket.disconnect();
    this.connected$.next(false);
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  listen(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, data => {
        observer.next(data);
      });
      // dispose of the event listener when unsubscribed
      return () => this.socket.off(event);
    });
  }
}
