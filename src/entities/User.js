import { ROLE } from '../constants/roles';

class User {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.age = props.age;
    this.roleList = props.roleList;
  }

  isUser = () => this.roleList.contains(ROLE.USER);
  isAdmin = () => this.roleList.contains(ROLE.ADMIN);
}
