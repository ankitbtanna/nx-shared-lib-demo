import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from './dog.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [DogService]
})
export class SharedDogServiceModule {}
