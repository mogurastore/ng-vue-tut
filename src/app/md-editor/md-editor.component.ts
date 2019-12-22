import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { of } from "rxjs";
import { startWith, debounceTime, map } from "rxjs/operators";
import * as marked from "marked";

@Component({
  selector: "app-md-editor",
  templateUrl: "./md-editor.component.html",
  styleUrls: ["./md-editor.component.css"]
})
export class MdEditorComponent implements OnInit {
  input = new FormControl("# hello");
  compiledMarkdown$ = of("");

  constructor() {
    this.compiledMarkdown$ = this.input.valueChanges.pipe(
      startWith(this.input.value),
      debounceTime(300),
      map(s => marked(s, { sanitize: true }))
    );
  }

  ngOnInit() {}
}
