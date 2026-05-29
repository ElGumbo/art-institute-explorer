import z from "zod";

export const ArtworkSchema = z.object({
  id: z.number().int(),
  title: z.string().nullish(),
  artist_title: z.string().nullish(),
  image_id: z.string().nullish(),
});

export const SearchResponseSchema = z.object({
  data: z.array(ArtworkSchema),
});

export type Artwork = z.infer<typeof ArtworkSchema>;

export const SavedArtworkSchema = z.object({
  artwork: ArtworkSchema,
  note: z.string().max(300),
});

export type SavedArtwork = z.infer<typeof SavedArtworkSchema>;
