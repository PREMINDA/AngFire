import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakPointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result=>result.matches),
    shareReplay()
  )

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
