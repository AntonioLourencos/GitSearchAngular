import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TopbarComponent } from "./components/topbar/topbar.component";

import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { HttpClientModule } from "@angular/common/http";

import { GitService } from "src/app/services/git.service";

@NgModule({
	declarations: [AppComponent, FooterComponent, TopbarComponent, NotFoundComponent, HomeComponent, SearchComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: "", component: HomeComponent },
			{ path: "search", component: SearchComponent },
			{ path: "**", component: NotFoundComponent },
		]),
	],
	providers: [GitService],
	bootstrap: [AppComponent],
})
export class AppModule {}
