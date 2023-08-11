import { Component } from '@angular/core';
import { CatService } from '@nx-shared-lib-demo/shared/cat-service';

@Component({
  selector: 'nx-shared-lib-demo-cat-pic',
  templateUrl: './cat-pic.component.html',
  styleUrls: ['./cat-pic.component.scss'],
})
export class CatPicComponent {
  picUrl = '';

  constructor(private cats: CatService) { }

  getCatPic() {
    this.cats.getRandomCat()
      .subscribe((res: any) => {
        this.picUrl = res.url;
      })
  }
}
