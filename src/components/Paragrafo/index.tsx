import { P } from './styles'

export type Props ={
  children:string
  tipo?: 'principal1' | 'segundario';
  fontSize?: number
}
const Paragrafo = ({children,tipo = 'principal1', fontSize} : Props) => <P fontSize={fontSize} tipo={tipo}>{children}</P>

export default Paragrafo
