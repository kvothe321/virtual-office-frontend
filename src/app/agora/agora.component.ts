import {Component, OnDestroy, OnInit} from '@angular/core';
import AgoraRTC, {
  IAgoraRTCClient,
  ILocalAudioTrack,
  ILocalVideoTrack,
  IRemoteAudioTrack,
  IRemoteVideoTrack
} from 'agora-rtc-sdk-ng';

@Component({
  selector: 'app-agora-component',
  template: `
      <div>
          <div id="local-stream" #localStream></div>
          <div id="remote-streams" #remoteStreams></div>
          <button (click)="join()">Join Call</button>
          <button (click)="leave()">Leave Call</button>
      </div>
  `,
  styles: [
    `
      #local-stream, #remote-streams {
        width: 100%;
        height: 300px;
        background-color: black;
      }
    `
  ],
  standalone: true
})
export class Agora implements OnInit, OnDestroy {
  private client: IAgoraRTCClient;
  private localAudioTrack: ILocalAudioTrack | null = null;
  private localVideoTrack: ILocalVideoTrack | null = null;

  constructor() {
    this.client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'});
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.leave();
  }

  async join() {
    const APP_ID = 'e9f3c4236de14c14a6120324cee04ccc';
    const TOKEN = '007eJxTYFDap+Faz/2QlV2mkeeCzM2gjX+//J5S4yoWUHE15tflucYKDMnmJsmW5sZmFoaGhibJFilJiWZJRkmGlkbJhgaWRhYm5bNLUhsCGRlWGL1mYmSAQBCfjcHdwzXIx5GBAQAvGh6k';
    const CHANNEL_NAME = 'GHERLA';

    this.client.on('user-published', async (user, mediaType) => {
      await this.client.subscribe(user, mediaType);

      if (mediaType === 'video') {
        const remoteVideoTrack = user.videoTrack as IRemoteVideoTrack;
        const remoteContainer = document.getElementById('remote-streams');
        remoteVideoTrack.play(remoteContainer!!);
      }

      if (mediaType === 'audio') {
        const remoteAudioTrack = user.audioTrack as IRemoteAudioTrack;
        remoteAudioTrack.play();
      }
    });

    await this.client.join(APP_ID, CHANNEL_NAME, TOKEN);

    this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    this.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

    const localContainer = document.getElementById('local-stream');
    if (localContainer) {
      this.localVideoTrack.play(localContainer);
    }

    await this.client.publish([this.localAudioTrack, this.localVideoTrack]);
  }

  async leave() {
    if (this.localAudioTrack) {
      this.localAudioTrack.close();
    }
    if (this.localVideoTrack) {
      this.localVideoTrack.close();
    }

    await this.client.leave();
  }
}
