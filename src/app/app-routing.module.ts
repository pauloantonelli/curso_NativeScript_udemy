import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CoreAppComponent } from "./core-app/core-app.component";

const routes: Routes = [
    { path: "", redirectTo: "/core-app", pathMatch: "full" },
    { path: "core-app", component: CoreAppComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
