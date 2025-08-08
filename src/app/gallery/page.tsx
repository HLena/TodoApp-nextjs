
import { narutoCharacters } from "./characters"
import CharacterCard from "@/components/CharacterCard"
import Link from "next/link"

const GalleryPage = () => {
  const characters = narutoCharacters
  return (
    <>
      {
        characters.length > 0 &&
        characters.map(character =>
          <Link href={`/gallery/${character.id}`} key={character.id}>
            <CharacterCard  {...character}/>
          </Link>
        )
      }

    </>
  )
}

export default GalleryPage