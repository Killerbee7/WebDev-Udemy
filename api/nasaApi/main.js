// Data from https://data.giss.nasa.gov/gistemp/

async function getData(){
const response = await fetch('data.csv');
const data = await response.text();


 const table= data.split('\n').slice(1);
 table.forEach(row =>{
    const column=row.split(',');
    const year=column[0];
    const temp=column[1];
    console.log(year,temp);
    
 });

}

getData();