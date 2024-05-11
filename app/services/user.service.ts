import axios from "axios"

const USERS = 'https://try.gitea.io/api/v1/users'

export const UserService = {
    async getByName(username: string) {
        const { data } = await axios(`${USERS}/${username}`)
        return data
    },

    async getRepos(username: string) {
        const { data } = await axios(`${USERS}/${username}/repos?page=1&limit=10`)
        return data
    }
}