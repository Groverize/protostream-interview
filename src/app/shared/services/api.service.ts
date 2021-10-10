import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoInfo } from 'src/app/_models/video-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getVideoInfo(): Observable<VideoInfo[]> {
    return this.http.get<VideoInfo[]>('https://content-cache.watchcorridor.com/v6/interview');
  }
}
