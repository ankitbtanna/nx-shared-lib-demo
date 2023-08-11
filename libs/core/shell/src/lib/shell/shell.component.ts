import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-shared-lib-demo-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  ngOnInit(): void {
    console.log('ShellComponent ngOnInit');
  }
}
