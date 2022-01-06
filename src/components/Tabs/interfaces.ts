
import { Dispatch , SetStateAction} from 'react'
import { Data } from 'src/constans/interfaces'

export interface Props {
    setCurrentTab : Dispatch<SetStateAction<number>>,
    activeTab : number,
    data : Array<Data>
  }
  