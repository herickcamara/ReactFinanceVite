import { categorys } from '../../data/categorys'
import { formatDate } from '../../functionsHelpers/dateFilter'
import { Item } from '../../types/Item'
import * as C from './styled'
type Props ={
    item: Item
}
export const TableItem = ({item}:Props)=>{
    return (
        <C.TableTr>
            <C.TableTd >{formatDate(item.date)}</C.TableTd>
            <C.TableTd >
               <C.Category bg={categorys[item.category].color} >
               {categorys[item.category].title}
                </C.Category> 
                </C.TableTd> 
            <C.TableTd >{item.title}</C.TableTd>
            <C.TableTd >
                <C.Value color={categorys[item.category].expense?'red':'green'}>
                {item.value}
                </C.Value>
            </C.TableTd>
        </C.TableTr>
    )
        
    
}  