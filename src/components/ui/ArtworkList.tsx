import type { Artwork } from "../types/artwork";
import ArtworkCard from "./ArtworkCard";

export default function ArtworkList({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className='bg-base-200 px-6 pb-12'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
}
