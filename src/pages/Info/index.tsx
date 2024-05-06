import { GithubLogo, Buildings, UsersThree } from "phosphor-react";

interface GitHubInformationsProps {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  followers: number;
  bio: string;
}

export function Info(gitHubInfos: GitHubInformationsProps) {
  return (
    <div className="bg-baseProfile text-white mt-[-2rem] flex flex-row items-center gap-6 h-[212px] rounded-lg p-8">
      <div className="hidden md:block">
        <img
          className="rounded-lg object-fill h-36 w-36"
          src={gitHubInfos.avatar_url}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 items-stretch h-[148px] gap-6">
        <div className="flex flex-row justify-between">
          <div>
            <h1>{gitHubInfos.name}</h1>
          </div>
          <div className="flex flex-1 text-blue justify-end items-center gap-1 hover:underline hover:underline-offset-4">
            <a href="https://github.com/wemerson38259">GitHUB</a>
            <GithubLogo size={14} color="#3294f8" />
          </div>
        </div>
        <div className="flex-1">{gitHubInfos.bio}</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <GithubLogo size={18} />
            <span>{gitHubInfos.login}</span>
          </div>
          <div className="flex flex-row gap-2">
            <Buildings size={18} />
            <span>{gitHubInfos.company}</span>
          </div>
          <div className="flex flex-row gap-2">
            <UsersThree size={18} />
            <span>{gitHubInfos.followers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
