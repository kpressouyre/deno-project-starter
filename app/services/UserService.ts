import UserRepository from "../repositories/UserRepository.ts";
import User from "../schemas/User.ts";

class UserService 
{
  constructor(){}

  readonly userRepository = new UserRepository();

  getUsers = async () => {
    return await this.userRepository.findAll();
  };

  loginCheck = async (email: string, password: string) => {
    return await this.userRepository.loginCheck(email, password);
  }

  createUser = async (user: User) => {
    return await this.userRepository.insert(user);
  };
}

export default UserService;