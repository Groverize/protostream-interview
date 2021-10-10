import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  videoID = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.videoID = Number(this.route.snapshot.paramMap.get('id'));
    
  }

}
