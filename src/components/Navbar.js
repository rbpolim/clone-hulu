import requests from "../utils/requests";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="relative h-auto mb-6">
      <div className="flex whitespace-nowrap space-x-10 px-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="text-2xl cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-500"
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
