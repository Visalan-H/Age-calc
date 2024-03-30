let inputbday=document.getElementById("date");
inputbday.max= new Date().toISOString().split("T")[0];
let resultage=document.getElementById("age");
let celeb=document.getElementById("celebrate");
function calculateage()
{
    let birthday=new Date(inputbday.value);
    let today=new Date();
    let d1=birthday.getDate();
    let m1=birthday.getMonth()+1;
    let y1=birthday.getFullYear();
    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1)
    {
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1
    }
    if(d2>=d1)
    {
        d3=d2-d1;
    }
    else{
        let n=daysinmonth(y1,m1);
        m3--;
        d3=n+d2-d1;
    }
    if(m3<0)
    {
        m3=11;
        y3--;
    }
    resultage.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
    if(d3===0 &&m3==0)
    {
        celeb.innerHTML=`Happy Birthday!🎂🎈`;
    }
}

function daysinmonth(year,month)
{
    return new Date(year,month,0).getDate();
}