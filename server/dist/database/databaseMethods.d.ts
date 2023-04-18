declare function getUsers(): Promise<any>;
declare function getUserById(id: Number): Promise<any>;
declare function createUser(name: String, email: String): Promise<any>;
export { getUsers, getUserById, createUser };
