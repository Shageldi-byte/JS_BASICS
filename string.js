const movieDates = `10-12-2023(18:30|21:45),11-12-2023/12-12-2023(15:30|18:00|22:45),13-12-2023/14-12-2023/15-12-2023(16:30|19:00)`;

movieDateFormatter(movieDates.trim());

function movieDateFormatter(input){
    let parts = input.split(',');
    let result = parts.map((item,i)=>{
        let date = item.split('(')[0];
        let time = item.split('(')[1];
        let slicedTime = time.slice(0,time.length-1);
        let dateParts = date.split('/');
        return {
            dates:dateParts,
            times: slicedTime.split('|')
        };
    });
    console.log(result);
}

// [
//     {
//         dates:['11-12-2023','12-12-2023'],
//         times:['15:30','18:00','22:45']
//     },
//     {
//         dates:['11-12-2023','12-12-2023'],
//         times:['15:30','18:00','22:45']
//     },
//     {
//         dates:['11-12-2023','12-12-2023'],
//         times:['15:30','18:00','22:45']
//     }
// ]