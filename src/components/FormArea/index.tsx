import { useState } from 'react'
import { categorys } from '../../data/categorys'
import { newDateAjusted } from '../../functionsHelpers/dateFilter'
import { Item } from '../../types/Item'

import * as C from './styled'
type Props = {
    onAdd:(item:Item)=>void
}
export const FormArea=({onAdd}:Props)=>{
   const [dateInput, setDateInput]= useState('')
   const [categoryInput, setCategoryInput] = useState('')
   const [titleInput,setTitleInput] = useState('')
   const [valueInput, setValueInput]=useState('')

   let categoryKey: string[] = Object.keys(categorys)

    const filterError = ()=>{
        let erro: string[] = []

        if(dateInput === '')
            erro.push('O campo DATA não foi Preenchido')
        if(categoryInput === '')
            erro.push('O campo CATEGORIA não foi preenchido')
        if(titleInput === '')
            erro.push('O campo TITULO não foi preenchido')
        if(valueInput === '')
            erro.push('O campo VALOR não foi preenchido')

        if(erro.length > 0 ){
            alert(erro.join('\n'))
        }else{
            onAdd({
                date:newDateAjusted(dateInput),
                category:categoryInput,
                title:titleInput,
                value:parseInt(valueInput)
            })
            clearField()
        }
    

    }
   const clearField= ()=>{
       setDateInput('')
       setCategoryInput('')
       setTitleInput('')
       setValueInput('')
   }
    return(
        <C.Container>
            <C.InputField >
            <C.InputTitle >Data:</C.InputTitle>
            <C.Input
            type="date" 
            value={dateInput}
            onChange={e => setDateInput(e.target.value)}
            />
         </C.InputField>
         <C.InputField >
            <C.InputTitle >Categoria:</C.InputTitle>
            <C.InputSelct value={categoryInput} onChange={e=>setCategoryInput(e.target.value)}>
                <option ></option>
                {categoryKey.map((category, index)=><option key={index} value={category} >{categorys[category].title}</option>)}
             </C.InputSelct>

         </C.InputField>
         <C.InputField >
            <C.InputTitle >Titulo: </C.InputTitle>
            <C.Input
            type="text" 
            placeholder='Titulo'
            value={titleInput}
            onChange={e=> setTitleInput(e.target.value)}
            />
           
         </C.InputField>
         <C.InputField >
            <C.InputTitle >Valor: </C.InputTitle>
            <C.Input
            type="number" 
            value={valueInput}
            onChange={e=>setValueInput(e.target.value)}
            />
           
         </C.InputField>
         <C.FieldButtons>
             <C.Button onClick={filterError} >Enviar</C.Button>
             <C.Button clear onClick={clearField} >Limpar</C.Button>
         </C.FieldButtons>
        </C.Container>
    )
}