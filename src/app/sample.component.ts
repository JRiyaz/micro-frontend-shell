import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlbumService } from "./album.service";
import { Album } from "./album";

@Component({
  selector: "app-sample",
  imports: [CommonModule],
  template: `
    <ul class="list-group m-3">
      @for (album of albums(); track album.id) {
        <li class="list-group-item">{{ album.title }}</li>
      } @empty {
        <li class="list-group-item">No users found ...</li>
      }
    </ul>
  `,
  styles: ``,
})
export class SampleComponent implements OnInit {
  albums: WritableSignal<Album[]> = signal([]);
  album_service: AlbumService = inject(AlbumService);

  ngOnInit(): void {
    this.album_service
      .getAlbums()
      .subscribe((album: Album[]) => this.albums.set(album));
  }
}
