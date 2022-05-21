import Image from "next/image";
import Link from "next/link";
import formatTimestamp from "../utils/formatTimestamp";

export default function EventCard({ id, name, eventTimestamp }) {
  return (
    <div className="group relative clickable-card rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
      <Link href={`/event/${id}`}>
        <a className="clickable-card__link"></a>
      </Link>
      <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden relative group-hover:opacity-75">
        <Image
          src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
          alt="event image"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <p className="mt-2 block text-sm text-gray-500">
        {formatTimestamp(eventTimestamp)}
      </p>
      <p className="block text-base font-medium text-gray-900">{name}</p>
    </div>
  );
}
