import Link from "next/link";

function Nav() {
  return (
    <ul className="flex text-white">
      <li className="pr-6">
        <Link href="/">Mint</Link>
      </li>
      <li className="pr-6">
        <Link href="/gallery">Gallery</Link>
      </li>
      <li className="pr-6">
        <Link href="/team">Team</Link>
      </li>
      <li className="pr-6">
        <Link href="/wallet">Wallet</Link>
      </li>
    </ul>
  );
}

export default Nav;
