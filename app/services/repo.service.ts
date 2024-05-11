import axios from "axios"

const REPO = 'https://try.gitea.io/api/v1/repos'

export const RepoService = {
    async getByName (username: string, reponame: string) {
        const { data } = await axios(`${REPO}/${username}/${reponame}`)
        return data
      }
}