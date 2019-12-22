import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MdEditorComponent } from "./md-editor/md-editor.component";

const routes: Routes = [
  {
    path: "md-editor",
    component: MdEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
