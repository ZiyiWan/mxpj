import Link from "next/link";
import React from "react";
interface User {
  id: number;
  name: string;
}

const UsersTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>
                <Link href={`/users/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
