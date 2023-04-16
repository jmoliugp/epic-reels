import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {}

export default function VideoSmall({}: Props) {
  return (
    <Link className="block" href={``}>
      <div className="relative">
        <div className="aspect-[9/16] overflow-hidden">
          <LazyLoadImage className="aspect-[9/16]" effect="opacity" />
        </div>
        <h3 className="line-clamp-1 absolute bottom-0 left-0 right-0 m-2 mt-2 text-sm font-normal drop-shadow-xl">
          title
        </h3>
      </div>
    </Link>
  );
}
