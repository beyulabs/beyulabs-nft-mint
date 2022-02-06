import Link from "next/link";

function Nav() {
  return (
    <ul className="flex">
      <li className="pl-6">
        <Link href="/">Mint</Link>
      </li>
      <li className="pl-6">
        <Link href="/gallery">Gallery</Link>
      </li>
      <li className="pl-6">
        <Link href="/team">Team</Link>
      </li>
      <li className="pl-6">
        <Link href="/wallet">Wallet</Link>
      </li>
    </ul>
  );
}

export default Nav;
