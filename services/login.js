const MongoLib = require('../lib/mongo')

class LoginService {
    constructor() {
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }
    
    async createLogin(n) {
        const luhnCreated = await this.mongoDB.create(this.collection, n);
        return luhnCreated;
    }

    async getLogin(n) {
        const login = await this.mongoDB.get(this.collection, n);
        console.log('login from service', n);
        return login || {};
    }

    async updateLogin(id, prim_nombre, seg_nombre, prim_apellido, seg_apellido, correo, contraseña, telefono) {
        const loginUpdated = await this.mongoDB.updateLogin(this.collection, id, prim_nombre, seg_nombre, prim_apellido, seg_apellido, correo, contraseña, telefono);
        console.log('login updated: ', loginUpdated);
        return loginUpdated || {};
    }

    async deleteLogin(id) {
        const loginDeleted = await this.mongoDB.delete(this.collection, id);
        console.log('product deleted', loginDeleted);
        return loginDeleted || {};
    }

}

module.exports = LoginService;