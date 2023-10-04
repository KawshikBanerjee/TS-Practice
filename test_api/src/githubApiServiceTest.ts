import * as request from 'request'
import { User } from './user';
import { Repo } from './repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true // so that it parses the response before passing to user object
}

export class GithubApiService {
    getUserInfo(userName: string, cb: (user: User) => any) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, (response: any, error: any,  body: any) => {
            let user = new User(body);

            // executing callback using the object
            cb(user);
        });
    }

    getReposInfo(userName: string, cb: (reposArray: Repo[]) => any) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (response: any, error: any,  body: any) => {
            let repos = body.map((repo: any) => new Repo(repo));
            
            cb(repos);
        });
    }
}