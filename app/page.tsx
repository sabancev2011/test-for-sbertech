import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import { UserService } from "./services/user.service";

const fetchUser = async (username: string) => {
  try {
    const user = await UserService.getByName(username)
    return user
  }
  catch (error) {
    console.log(error)
  }
}

const fetchUserRepos = async (username: string) => {
  const repos = await UserService.getRepos(username)
  return repos
}

export default async function HomePage({ searchParams }: any) {
  const user = searchParams.name && await fetchUser(searchParams.name)
  const repos = user?.username && await fetchUserRepos(user.username)

  return (
    <>
      <Search placeholder="Enter username..." />
      {user && <UserInfo user={user} repos={repos} />}
    </>
  );
}
