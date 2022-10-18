// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’

let date = function printDate(){

    const today = new Date()
    const day = today.getDate()        
    const month = today.getMonth()    
    const year = today.getFullYear()
    
    console.log(day,month,year);
    
    const getInfo={
        name:"Lithium",
        week:'W3D5',
        topic:'Todays Node js Topic -- How to create Module and Export it.',
    }
    
    function getBatchInfo(){
        console.log(`${getInfo.name} , ${getInfo.week} , ${getInfo.topic} `)
    }
    
    getBatchInfo()
}



module.exports.date=date
