// console.log('hello!');
import * as _ from "lodash";
import {GithubApiService} from "./githubApiServiceTest";
import { Repo } from "./repo";
import { User } from "./user";

let svc = new GithubApiService();

// process.argv returns 3 objects
// 3rd one is the input prompt (npm start torvalds)
if (process.argv.length < 3) {
    console.log("Please provide username.");
} else {
    let targetUsername: string = process.argv[2];
    
    svc.getUserInfo(targetUsername, (user: User) => {
        svc.getReposInfo(targetUsername, (reposArray: Repo[]) => {
            
            // sorting by fork count 
            // mul by -1 makes it descending
            let sortedArr = _.sortBy(reposArray, [(repo: Repo) => repo.forkCount * -1]);
    
            user.repos = _.take(sortedArr, 5);
            console.log(user);
        });
    });
}