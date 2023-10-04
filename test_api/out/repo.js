"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
class Repo {
    // repos!: Repo[];
    constructor(userRepo) {
        this.name = userRepo.name;
        this.description = userRepo.description;
        this.url = userRepo.url;
        this.size = userRepo.size;
        this.forkCount = userRepo.forks;
    }
}
exports.Repo = Repo;
