import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { VideoInfo } from 'src/app/_models/video-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoInfo: VideoInfo[] = [];
  newestToOldest = true;

  constructor(private api: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.api.getVideoInfo().subscribe(data => {
      this.videoInfo = data;
      this.orderByReleaseDate(true);
    });
  }

  selectVideo(id: number) {
    this.router.navigate(['video', id]);
  }

  orderByReleaseDate(newestToOldest = this.newestToOldest) {
    if (newestToOldest) {
      this.videoInfo.sort(function(a,b){
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      });
    } else {
      this.videoInfo.sort(function(a,b){
        return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
      });
    }
    this.newestToOldest = !this.newestToOldest;
  }

}
