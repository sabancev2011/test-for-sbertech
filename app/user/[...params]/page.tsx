import Repo from "@/app/components/Repo";
import { RepoService } from "@/app/services/repo.service";

const fetchUserRepo = async (username: string, reponame: string) => {
  const repos = await RepoService.getByName(username, reponame)
  return repos
}

export default async function RepoPage({ params: { params: [username, _, reponame] } }: any) {
  const repo = await fetchUserRepo(username, reponame)

  return (
    <Repo repo={repo} />
  );
}
