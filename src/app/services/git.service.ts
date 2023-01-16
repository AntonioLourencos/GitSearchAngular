import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Repos } from "../models/repos";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class GitService {
	private baseurl = "https://api.github.com/";

	constructor(private http: HttpClient) {}

	getUser(username: string): Observable<User> {
		return this.http.get<User>(this.baseurl + "users/" + username);
	}

	getUserRepos(username: string): Observable<Repos[]> {
		return this.http.get<Repos[]>(this.baseurl + "users/" + username + "/repos");
	}
}
