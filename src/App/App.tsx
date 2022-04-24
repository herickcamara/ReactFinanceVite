import {useEffect, useState} from 'react'
import * as C from  './AppStyled'
import {Item} from '../types/Item'
import {Category} from '../types/Category'
import {items} from '../data/items'
import {categorys} from '../data/categorys'
import {filterListByMonth, getCurrentMonth} from '../functionsHelpers/dateFilter'
import { TableArea } from '../components/TableArea/index'
import { InfoArea } from '../components/InfoArea'
import { FormArea } from '../components/FormArea'

function App(){
const [list, setList]= useState(items)
const [filterList, setFilterList]= useState<Item[]>([])
const [currentMonth, setCurrentMonth]= useState(getCurrentMonth())
const [income,setIncome] = useState(0)
const [expense,setExpense] = useState(0)


useEffect(()=>{
  setFilterList(filterListByMonth(list,currentMonth) )
},[list,currentMonth])

useEffect(()=>{
  let incomeResume=0
  let expenseResume=0

  for(let i in filterList){
    if(categorys[filterList[i].category].expense){
      expenseResume += filterList[i].value
    }else{
      incomeResume += filterList[i].value
    }
  }

  setIncome(incomeResume)
  setExpense(expenseResume)

},[filterList])

const handleMonthChange= (newMonth:string)=>{
  setCurrentMonth(newMonth)
}

const addOperacao =(item:Item)=>{
    let newList = [...list]
    newList.push(item)
    setList(newList)
}

return(
    <C.Container >
      <C.Header >
        <C.HeaderText >Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body >
      <InfoArea  
      currentMonth={currentMonth}
      onMonthChange={handleMonthChange}
      income={income}
      expense={expense}
      />
 
      <FormArea  onAdd={addOperacao} />

      < TableArea list={filterList} />
      </C.Body>
    </C.Container>
  )
}

export default App
