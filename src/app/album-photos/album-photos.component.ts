import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../models';
import {AlbumsService} from '../albums.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];
  format: boolean;
  constructor(private albumsService: AlbumsService,
              private route: ActivatedRoute,
              private location: Location) {this.format = true;}

  ngOnInit(): void {
    this.getAlbumPhoto();
  }

  getAlbumPhoto() {
    this.albumsService.getAlbumPhoto(+this.route.snapshot.paramMap.get('id')).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack() {
    this.location.back();
  }

}
