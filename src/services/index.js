import config from '../utils/config'
import { Http } from '../utils/http'
import { PostService } from "./post.service";
import { UserService } from "./user.service";


class Services {

    constructor() {
        this.services = new Map()
        this.init()
    }

    init() {

        const http = new Http(config)

        const posts = new PostService(http, config)
        const users = new UserService(http, config)

        this.add('posts', posts)
        this.add('users', users)

    }

    add(name, service) {
        this.services.set(name, service)
    }

    get(name) {
        if (!this.services.has(name)) {
            throw new Error('Service Not Exists')
        }
        return this.services.get(name)
    }
}

const services = new Services()
export default services