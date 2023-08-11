import { Component } from '@angular/core';
import { DogService } from '@nx-shared-lib-demo/shared/dog-service';

@Component({
  selector: 'nx-shared-lib-demo-dog-pic',
  templateUrl: './dog-pic.component.html',
  styleUrls: ['./dog-pic.component.scss'],
})
export class DogPicComponent {
  picUrl = '';

  constructor(private dogs: DogService) { }

  getDogPic() {
    this.dogs.getRandomDog()
      .subscribe((res: any) => {
        this.picUrl = res.message;
      })
  }
}
