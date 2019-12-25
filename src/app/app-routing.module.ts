import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MdEditorComponent } from "./md-editor/md-editor.component";
import { GithubCommitsComponent } from "./github-commits/github-commits.component";

const routes: Routes = [
  {
    path: "md-editor",
    component: MdEditorComponent
  },
  { path: "github-commits", component: GithubCommitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
