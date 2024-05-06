import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Info } from "./pages/Info";
import axios from "axios";
import { Card } from "./components/Card";
import { Input } from "./components/ui/input";

interface GitHubInformationsProps {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  followers: number;
  bio: string;
}
interface GitHubIssue {
  title: string;
  body: string;
  id: number;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
}
interface GitHubIssuesProps {
  total_count: number;
  issues: GitHubIssue[];
}
export function App() {
  const gitID = "wemerson38259";
  const repoName = "reactjs-github-blog-challenge";

  const [search, setSearch] = useState("");

  const [gitHubInfos, setgitHubInfos] = useState<GitHubInformationsProps>({
    login: "",
    avatar_url: "",
    name: "",
    company: "",
    followers: 0,
    bio: "",
  });

  const [gitHubIssues, setGitHubIssues] = useState<GitHubIssuesProps>({
    total_count: 0,
    issues: [] || undefined,
  });

  async function getGitHubPerfil(gitID: string) {
    const response = await axios.get(`https://api.github.com/users/${gitID}`);
    console.log(response.data);
    setgitHubInfos({
      login: response.data.login,
      avatar_url: response.data.avatar_url,
      name: response.data.name,
      company: response.data.company,
      followers: response.data.followers,
      bio: response.data.bio,
    });
  }

  async function getGitHubIssues(
    gitID: string,
    search?: string,
    repoName?: string
  ) {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${search}%20repo:rocketseat-education/${repoName}`
      );
      console.log(response.data);
      setGitHubIssues({
        total_count: response.data.total_count,
        issues: response.data.items,
      });
    } catch (error) {
      console.log("error");
    }
  }

  function handleSearchIssues(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    getGitHubPerfil(gitID);
  }, [gitID, repoName]);

  useEffect(() => {
    getGitHubIssues(gitID, search, repoName);
  }, [search]);

  return (
    <div className="bg-baseBackground leading-4">
      <Header />
      <main>
        <div className="grid md:grid-cols-4 grid-cols-1 justify-center items-center mx-4">
          <div className="grid md:col-start-2 md:col-span-2 gap-8">
            <Info {...gitHubInfos} />
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between">
                <h3 className="text-baseTitle">
                  <b>Publicações</b>
                </h3>
                <span className="text-baseSubTitle">
                  {gitHubIssues.total_count}
                </span>
              </div>
              <div className="h-10 boder border-baseBorder bg-baseInput rounded-lg">
                <Input
                  className=" bg-baseInput text-white"
                  placeholder="search the issue"
                  type="text"
                  onChange={handleSearchIssues}
                  value={search}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gitHubIssues.total_count > 0 ? (
                gitHubIssues.issues.map((issue) => (
                  <Card key={issue.id} {...issue} />
                ))
              ) : (
                <div className="h-screen text-baseSpan">
                  <p>No issues registered to your filter:</p>
                  <p>
                    <b className="text-baseSpan">{search}</b>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
