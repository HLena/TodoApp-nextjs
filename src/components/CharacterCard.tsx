import Image from 'next/image'
import Card from './Card'

interface CharacterCardProp{
    id: number,
    name: string,
    ninjutsuType: string,
    url: string
}

const CharacterCard = ({name, ninjutsuType, url}: CharacterCardProp) => {
  return (
    <Card>
        <Image 
          src={url} 
          alt={`${name}-image`}
          height={500}
          width={500}
        />
      <div className='text-center'>
        <p className='font-semibold text-lg mt-4'>{name}</p>
        <span>{ninjutsuType}</span>
      </div>
    </Card>
  )
}

export default CharacterCard