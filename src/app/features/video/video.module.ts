import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';



@NgModule({
  declarations: [
    VideoPlayerComponent,
    VideoThumbnailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }
