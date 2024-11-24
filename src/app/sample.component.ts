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
    <ul class="list-disc m-36">
      @for (album of albums(); track album.id) {
        <li>{{ album.title }}</li>
      } @empty {
        <li>No users found ...</li>
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
