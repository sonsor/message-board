export class PostService {
    constructor(http, config) {
        this.http = http
        this.config = config
    }

    async all() {
        const url = `${this.config.api.url}/posts`
        const { data } = await this.http.get(url)
        return data
    }

    async comments(id) {
        const url = `${this.config.api.url}/posts/${id}/comments`
        const { data } = await this.http.get(url)
        return data
    }

}