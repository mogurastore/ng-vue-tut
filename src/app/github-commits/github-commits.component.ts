import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: "app-github-commits",
  templateUrl: "./github-commits.component.html",
  styleUrls: ["./github-commits.component.css"]
})
export class GithubCommitsComponent implements OnInit {
  branches = ["master", "dev"];
  currentBranch = new FormControl("master");
  commits = of([]);

  constructor(private http: HttpClient) {
    const apiURL =
      "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";

    this.commits = this.currentBranch.valueChanges.pipe(
      startWith(this.currentBranch.value),
      switchMap(branch => this.http.get<Object[]>(apiURL + branch))
    );
  }

  ngOnInit() {}
}
