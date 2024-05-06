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
export function Card(issue: GitHubIssue) {
  return (
    <div className="flex flex-col min-h-64 hover:border rounded-lg p-4 gap-4 bg-basePost ">
      <div className="flex flex-row justify-between">
        <h2 className="text-baseTitle">{issue.title}</h2>
        <span className="text-baseSpan">views</span>
      </div>
      <div>
        <span className="text-baseSpan">
          {issue.body === null
            ? ""
            : issue.body.length < 255
            ? issue.body
            : issue.body.slice(0, 255) + "..."}
        </span>
      </div>
    </div>
  );
}
