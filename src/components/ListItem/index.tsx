import * as C from './styles';
import { Item } from '../../types/Item'

type Props = {
  item: Item
}

export const ListItem = (props: Props) => {
  const { item } = props

  return (
    <C.Container>
      <input type="checkbox"/>
      <label>{item.name}</label>
    </C.Container>
  )
}