import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MdEditorComponent } from "./md-editor/md-editor.component";
import { GithubCommitsComponent } from './github-commits/github-commits.component';

@NgModule({
  declarations: [AppComponent, MdEditorComponent, GithubCommitsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
