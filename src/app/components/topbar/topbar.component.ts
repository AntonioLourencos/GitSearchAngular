import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
	selector: "app-topbar",
	templateUrl: "./topbar.component.html",
	styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent implements OnInit {
	search?: string;
	path: string = "/";

	constructor(private location: Location, private _route: ActivatedRoute, private _router: Router) {}

	ngOnInit() {
		this.path = this.location.path().split("?")[0];

		this._route.queryParams.subscribe((params) => {
			this.search = params["username"];
		});
	}

	handleSearch(event: any) {
		const isEnter = event.key && event.key.toLowerCase() === "enter";
		const whereGo = !!isEnter && !!(event.target.value.length >= 3) ? "search" : this.path;

		this._router.navigate([whereGo], {
			queryParams: {
				username: event.target.value,
			},
			queryParamsHandling: "merge",
		});
	}
}
