// app/NavigationBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/users">User List</Link>
      </li>
    </ul>
  );
}
