import { P } from './styles'

export type Props ={
  children:string
  tipo?: 'principal1' | 'segundario';
}
const Paragrafo = ({children,tipo = 'principal1'} : Props) => <P tipo={tipo}>{children}</P>

export default Paragrafo
