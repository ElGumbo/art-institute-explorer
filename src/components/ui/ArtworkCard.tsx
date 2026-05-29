import { useState } from "react";
import type { Artwork } from "../types/artwork";
import { getSaved, saveArtwork } from "../utils/gallery";

const getImageUrl = (imageId: string) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const [isSaved, setIsSaved] = useState(() =>
    getSaved().some((s) => s.artwork.id === artwork.id),
  );

  const handleSave = () => {
    saveArtwork(artwork);
    setIsSaved(true);
  };
  return (
    <div className='bg-base-100 border border-base-300 rounded-sm overflow-hidden flex flex-col hover:shadow-lg duration-200'>
      <div className='aspect-[4/3] bg-base-200 relative overflow-hidden'>
        {artwork.image_id && (
          <img
            src={getImageUrl(artwork.image_id)}
            alt={artwork.title ?? "Artwork"}
            className='w-full h-full object-cover'
          />
        )}
      </div>
      <div className='p-4 flex flex-col gap-1'>
        <p className='font-serif text-sm font-medium text-base-content line-clamp-2'>
          {artwork.title ?? "Untitled"}
        </p>
        <p className='text-xs text-base-content/60 italic'>
          {artwork.artist_title ?? "Artist unknown"}
        </p>
        <button
          onClick={handleSave}
          disabled={isSaved}
          className='mt-2 text-xs uppercase tracking-widest text-error hover:opacity-70 hover:cursor-pointer transition-opacity disabled:opacity-30'
        >
          {isSaved ? "Saved" : "+ Add to Gallery"}
        </button>
      </div>
    </div>
  );
}
