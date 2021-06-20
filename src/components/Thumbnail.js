import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="group hover:text-white flex flex-col p-2 sm:p-4 cursor-pointer">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.posters_path}` ||
          `${BASE_URL}${result.posters_path}`
        }
        width={1920}
        height={1080}
        className="rounded-md transition-all duration-500 ease-in-out hover:scale-110"
        alt={`Poster movie ${result.original_name}`}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h1 className="font-bold">{result.title || result.original_name}</h1>
        <p className="flex text-sm text-gray-400 items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
