export interface GithubRepos {
    total_count: number;
    items: GithubRepo[];
}

export interface GithubRepo {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    open_issues_count: number;
    owner: Owner;
}

export interface Owner {
    avatar_url: string;
    login: string;
}