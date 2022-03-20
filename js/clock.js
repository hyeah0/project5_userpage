const today = document.querySelector(".time-date");
const time = document.querySelector(".time-time");

function getDate(){
    const currentdate = new Date();
    const todayYear = currentdate.getFullYear();
    const todayMonth = currentdate.getMonth();
    const todayDate = currentdate.getDate();

    const hours = String(currentdate.getHours()).padStart(2,"0");
    const minutes = String(currentdate.getMinutes()).padStart(2,"0");
    const seconds = String(currentdate.getSeconds()).padStart(2,"0");
    
    today.innerHTML = `${todayYear}-${todayMonth}-${todayDate}`;
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getDate();
setInterval(getDate,1000);





