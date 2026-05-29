import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";
import z from "zod";

import type { Artwork } from "../types/artwork";
import { ArtworkSchema, SearchResponseSchema } from "../types/artwork";
import ArtworkList from "../ui/ArtworkList";

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const handleSearch = async (query: string) => {
    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,artist_title,image_id`,
    );
    const resData = await res.json();
    const { data, error, success } = SearchResponseSchema.safeParse(resData);

    if (!success) {
      throw new Error(z.prettifyError(error));
    } else {
      setArtworks(data.data);
      console.log(data.data);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ArtworkList artworks={artworks} />
    </>
  );
}
