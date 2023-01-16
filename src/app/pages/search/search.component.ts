import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Repos } from "src/app/models/repos";
import { User } from "src/app/models/user";
import { GitService } from "src/app/services/git.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
	private defaultProfile: User = {
		name: "",
		login: "Empty",
		bio: "",
		avatar_url: "assets/guest.png",
		html_url: "",
	};

	public profile: User = this.defaultProfile;
	public error: string = "";

	public repos: Repos[] = [];

	constructor(private _route: ActivatedRoute, public gitService: GitService, private _router: Router) {}

	ngOnInit(): void {
		this._route.queryParams.subscribe((params) => {
			const username = params["username"];

			if (!username || !username.length) {
				this.error = "Missing username";
				return;
			}

			this.error = "";

			this.gitService.getUser(username).subscribe(
				(profile) => (this.profile = profile),
				(res) => (this.error = res.error.message),
				() => (this.error = "")
			);

			if (!!this.error.length) {
				this.gitService.getUserRepos(username).subscribe(
					(repos) => (this.repos = repos),
					(res) => (this.error = res.error.message),
					() => (this.error = "")
				);
			}
		});
	}
}
