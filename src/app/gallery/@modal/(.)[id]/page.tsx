import Image from "next/image";
import { narutoCharacters } from "../../characters";

const ModalGallery = async ({params}: {params: Promise<{id: string}>}) => {

  const {id} = await params;
  const character = narutoCharacters.find(character => parseInt(id) === character.id)
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg">
      <Image 
        src={character!.url} 
        alt={character!.name}
        width={500}
        height={500}
      />
    </div>
  </div>
  )
}

export default ModalGallery
