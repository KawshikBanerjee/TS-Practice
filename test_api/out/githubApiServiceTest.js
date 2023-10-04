"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
const request = __importStar(require("request"));
const user_1 = require("./user");
const repo_1 = require("./repo");
const OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true // so that it parses the response before passing to user object
};
class GithubApiService {
    getUserInfo(userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, (response, error, body) => {
            let user = new user_1.User(body);
            // executing callback using the object
            cb(user);
        });
    }
    getReposInfo(userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (response, error, body) => {
            let repos = body.map((repo) => new repo_1.Repo(repo));
            cb(repos);
        });
    }
}
exports.GithubApiService = GithubApiService;
