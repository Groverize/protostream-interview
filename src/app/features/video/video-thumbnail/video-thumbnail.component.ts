import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { VideoInfo } from 'src/app/_models/video-info';
import { VideoTypeEnum } from 'src/app/_models/video-type.enum';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  @Input() 
  videoInfo!: VideoInfo;
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // determining whether it's mobile would usually be done in a service or somewhere shared/more global.
    // This is just a quick hack. Could use ngx-device-detector or navigator.userAgent to detect actual device.
    this.breakpointObserver
    .observe(['(min-width: 450px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }

  getImageThumbnailURL() {
    let url = null
    if (this.isMobile) {
      url =  this.videoInfo.images?.find(x => x.type === VideoTypeEnum.Packshot)?.url;
    } else {
      url =  this.videoInfo.images?.find(x => x.type === VideoTypeEnum.Thumbnail)?.url;
    }

    if (url) return url;

    // TODO: Video ID 2077 is missing images. Contact client/Scott for images/investigation.
    return this.isMobile ? 'https://dummyimage.com/360x640/000/fff' : 'https://dummyimage.com/640x360/000/fff';
  }

}
