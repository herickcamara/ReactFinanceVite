import { Item } from "../types/Item"

export const getCurrentMonth=()=>{
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const  filterListByMonth = (list:Item[],date:string):Item[]=>{
let newList : Item[]=[]
let [year,month]= date.split('-')

for(let i in list){
    if (
        list[i].date.getFullYear()=== parseInt(year) &&
        (list[i].date.getMonth()+1)=== parseInt(month)
    ) {
        newList.push(list[i])
    }
}


return newList
}

export const formatDate = (date:Date):string =>{
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    let dateFilter = `${formatZERO(day)}/${formatZERO(month)}/${year}`
    return dateFilter
}
const formatZERO = (n:number):string=> n < 10 ?`0${n}`:`${n}`


export const formatCurrentMonth = (currentMonth:string):string=>{
    let [year, month]= currentMonth.split('-')
    let months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    return `${months[parseInt(month)-1]} de ${year}`
}
export const newDateAjusted =(dateInput:string)=>{
 let [year,month,day]= dateInput.split('-')
 
 return new Date(parseInt(year),parseInt(month)-1,parseInt(day))
}