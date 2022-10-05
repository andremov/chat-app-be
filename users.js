const users = []
export default class Users {
  // constructor() {
  //   console.log("Users init");
  //   this.users = [];
  // }

  static addUser({ id, name, room }) {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
  
    if (users.find((user) => user.room === room && user.name === name)) {
      return { error: 'Username is taken.' };
    }
  
    if (!name || !room) {
      return { error: 'Missing username or room.' };
    }
  
    const user = { id, name, room };
    users.push(user);
  
    return { user };
  }

  static removeUser(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
  }

  static getUser(id) {
    return users.find((user) => user.id === id)
  }

  static getUsersInRoom(room) {
    users.filter((user) => user.room === room);
  }
}
