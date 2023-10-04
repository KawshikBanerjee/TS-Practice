import { Repo } from "./repo";

export class User {
    login!: string;
    fullName!: string;
    repoCount!: number;
    followerCount!: number;
    repos!: Repo[];

    constructor(userResponse: any) {
        // userResponse = JSON.parse(userResponse);     // need to parse separately if not done beforehand

        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}