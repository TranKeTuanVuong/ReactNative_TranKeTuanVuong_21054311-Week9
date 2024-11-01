// hooks/useUsers.js
import { useRecoilState } from 'recoil';
import { usersAtom } from './Recoil';
import { fetchUsers, createUser, updateUser, deleteUser } from './FunctionsAPI';

export const useUsers = () => {
  const [users, setUsers] = useRecoilState(usersAtom);

  // Fetch users
  const loadUsers = async () => {
    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);
  };

  // Create a user
  const addUser = async (userData) => {
    const newUser = await createUser(userData);
    setUsers((prev) => [...prev, newUser]);
  };

  // Update a user
  const modifyUser = async (userId, userData) => {
    const updatedUser = await updateUser(userId, userData);
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? updatedUser : user))
    );
  };

  // Delete a user
  const removeUser = async (userId) => {
    await deleteUser(userId);
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return { users, loadUsers, addUser, modifyUser, removeUser };
};
