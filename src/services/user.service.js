export class UserService {
    constructor(http, config) {
        this.http = http
        this.config = config
    }

    async one(id) {
        const url = `${this.config.api.url}/users/${id}`
        const { data } = await this.http.get(url)
        return data
    }
}