import { useEffect, useState } from "react"



export default function TableRows({data, keyword}){
    let rows = '';
    const test = 'test'
    const [tableRows, setRows] = useState("")
    const table = document.getElementById('mytable')
    useEffect(() => {
        const makeRows = () => {
            //console.log(rows)
            for (let item of data) {
                rows += `<tr>`
                //console.log(data[item])
                for (let key in item) {
                    //console.log(item[key])
                    rows += `<td> ${item[key]} </td>`
                }
                rows += `</tr>`
            }
            setRows(rows)
        }
        makeRows();
        //console.log('makerows test')
        //console.log(rows)
    }, [data, keyword])



    


    return (
        
            <div>{tableRows}</div>
        
    )
}


/* export default function TableRows({data, keyword}){
    let rows = '';
    const test = 'test'
    const [tableRows, setRows] = useState("")
    useEffect(() => {
        const makeRows = () => {
            //console.log(rows)
            for (let item of data) {
                rows += `<tr>`
                //console.log(data[item])
                for (let key in item) {
                    //console.log(item[key])
                    rows += `<td> ${item[key]} </td>`
                }
                rows += `</tr>`
            }
            setRows(rows)
        }
        makeRows();
        //console.log('makerows test')
        //console.log(rows)
    }, [data, keyword]) */