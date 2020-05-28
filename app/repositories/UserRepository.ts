import db from "../../config/db/mongo.ts";
import User from "../schemas/User.ts";

class UserRepository
{
    constructor(){}

    readonly userCollection = db.collection('users');

    async findAll(){
        const user = await this.userCollection.find();

        return user;
    }

    async loginCheck(email: string, password: string){
        const user = await this.userCollection.find({email: email, password: password});

        return user;
    }

    async insert(user: User) {
        const { $id } = await this.userCollection.insertOne(user);

        return $id;
      }
}

export default UserRepository;