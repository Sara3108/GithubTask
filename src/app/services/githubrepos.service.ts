import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepos } from '../modals/repos.modal';
@Injectable({
  providedIn: 'root'
})
export class GithubreposService {
  
  private baseUrl = 'https://api.github.com/search/repositories';

  constructor(private httpClient: HttpClient) { }

  getGithubRepos(page: number) : Observable <GithubRepos>{
    return this.httpClient.get<GithubRepos>(this.baseUrl + '?q=created:>2017-10-22&sort=stars&order=desc&page=' + page);
  }
}
