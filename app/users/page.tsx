import Link from "next/link";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  return (
    <>
      <div>This is the users page</div>
      <Link href="users/newUsers">New Users</Link>
      <UsersTable />
    </>
  );
};

export default UsersPage;
