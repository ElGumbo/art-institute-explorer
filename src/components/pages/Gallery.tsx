import { useState } from "react";
import type { SavedArtwork } from "../types/artwork";
import { getSaved, deleteArtwork, updateNote } from "../utils/gallery";
import ArtworkCard from "../ui/ArtworkCard";

export default function Gallery() {
  const [saved, setSaved] = useState<SavedArtwork[]>(getSaved);
  const handleDelete = (id: number) => {
    deleteArtwork(id);
    setSaved(getSaved());
  };

  const handleNote = (id: number, note: string) => {
    updateNote(id, note);
    setSaved(getSaved());
  };

  return (
    <div className='bg-base-200 px-6 pb-12 min-h-screen'>
      <h1 className='font-serif text-5xl font-normal text-base-content py-8'>
        My Gallery
      </h1>
      {saved.length === 0 ? (
        <p className='text-base-content/40 italic'>No saved artworks yet.</p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {saved.map(({ artwork, note }) => (
            <div key={artwork.id} className='flex flex-col gap-2'>
              <ArtworkCard artwork={artwork} />
              <textarea
                value={note}
                onChange={(e) => handleNote(artwork.id, e.target.value)}
                placeholder='Add a note...'
                maxLength={300}
                className='textarea textarea-bordered text-xs bg-base-100 resize-none w-full'
                rows={2}
              />
              <button
                onClick={() => handleDelete(artwork.id)}
                className='text-xs uppercase tracking-widest text-error hover:opacity-70 transition-opacity'
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
