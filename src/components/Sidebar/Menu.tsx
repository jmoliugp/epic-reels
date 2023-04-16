import Link from "next/link";

export default function Menu() {
  return (
    <ul className="mb-4">
      <MenuItem />
    </ul>
  );
}

interface Props {}

function MenuItem({}: Props) {
  return (
    <li>
      <Link href={``} className="flex items-center p-2">
        {" "}
        <span
          className={`hidden text-[18px] font-semibold md:ml-2 lg:inline-block ${
            true && "text-primary"
          }`}
        >
          item.name
        </span>
      </Link>
    </li>
  );
}
