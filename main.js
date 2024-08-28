fetch("https://gekyume11.github.io/student-data/students_data.json")
.then( res => res.json() )
.then( el => {
    let tBody = document.getElementById("tBody")
    el.map( el => {
        let style = "padding: 0; border: none;";
        let total = (
            el.sub1 +
            el.sub2 +
            el.sub3 +
            el.sub4 +
            el.sub5
        ) 
        let per = (total / 5)
        tBody.innerHTML += `
            <tr className='this-one'>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td style="${style}">
            <table width={"100%"}>
                <tr>
                    <td style="width: 20%">${el.sub1}</td>
                    <td style="width: 20%">${el.sub2}</td>
                    <td style="width: 20%">${el.sub3}</td>
                    <td style="width: 20%">${el.sub4}</td>
                    <td style="width: 20%">${el.sub5}</td>
                </tr>
            </table>
            </td>
            <td>${total}</td>
            <td>${per.toFixed(2)}</td>
            <td>${
                per <= 33 ? 'F' :
                per <= 55 ? 'E' :
                per <= 65 ? 'D' :
                per <= 75 ? 'C' :
                per <= 85 ? 'B' : 'A'
            }</td>
        </tr>
        `
    } )
} )