import { Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  data: String = 'angular-lifecycle-hooks';
  

  constructor() {
    console.log("1. constructor - " + this.data);
  }

  ngOnChanges() {
    console.log("2. ngOnChanges - " + this.data);
  }

  ngOnInit() {
    console.log("3. ngOnInit - " + this.data);
  }

  ngDoCheck() {
    console.log("4. ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("5. ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("6. ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("7. ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("8. ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("9. ngOnDestroy");
  }

}
