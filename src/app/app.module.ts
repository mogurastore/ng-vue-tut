import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MdEditorComponent } from "./md-editor/md-editor.component";
import { GithubCommitsComponent } from "./github-commits/github-commits.component";
import { FormatDatePipe } from './github-commits/format-date.pipe';
import { TruncatePipe } from './github-commits/truncate.pipe';

@NgModule({
  declarations: [AppComponent, MdEditorComponent, GithubCommitsComponent, FormatDatePipe, TruncatePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
