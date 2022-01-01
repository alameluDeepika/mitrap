var j=1;
var d=1;
var a=1;
var b=1;
var c=1;
var preloader=document.getElementById("pre");
function func()
{
    console.log("hello");
    preloader.style.display="none";
}
function c1(){
    document.getElementById("side").style.display="none";
     document.getElementById("cone").style.display="none";
   }
function o(){
        document.getElementById("side").style.display="block";
    document.getElementById("cone").style.display="block";
}
function hide(){
    document.getElementById("side").style.display="none";
        document.getElementById("cone").style.display="none";
    }
function ch(event){
    var i=event.target.id;
    console.log(i);
    console.log(i[1]);
    var pg_num=i[1];
    pg(pg_num);
       
}
function pg(pg_num)
{
    var jo=document.getElementsByClassName("jo");
    console.log(document.getElementsByClassName("jo").length);
for(var k=0;k<jo.length;k++)
{
    jo[k].style.backgroundColor="white";
}
    if(pg_num==1)
    {
        document.getElementById("pg1").style.display="block";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg4").style.display="none";
        document.getElementById("pg5").style.display="none";
    now=1;
    }
    else if(pg_num==2)
    {
        document.getElementById("pg2").style.display="block";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg4").style.display="none";
        document.getElementById("pg5").style.display="none";
now=2
    }
    else if(pg_num==3)
    {
        document.getElementById("pg3").style.display="block";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg4").style.display="none";
        document.getElementById("pg5").style.display="none";
        now=3;
    }else if(pg_num==4)
    {
        document.getElementById("pg4").style.display="block";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg5").style.display="none";
        now=4;
    } 
    else if(pg_num==5)
    {
        document.getElementById("pg5").style.display="block";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg4").style.display="none";
        now=5;
    } 
    return now; 
}
function chl_1(event)
{ 
    var idd="img"+a;
    console.log(idd);
       
if(a==1)
{    console.log(document.getElementById(idd));
    document.getElementById(idd).style.backgroundColor="red";
    document.getElementById("jjh").style.backgroundImage="url('People/People/IMG_20210717_171041.jpg')";
a++;
}
else if(a==2)
{ document.getElementById(idd).style.backgroundColor="red";
    document.getElementById("jjh").style.backgroundImage="url('People/People/IMG_20210717_170952.jpg')";
    a++;
}
else if(a==3)
{ document.getElementById(idd).style.backgroundColor="red";
    document.getElementById("jjh").style.backgroundImage="url('People/People/IMG_20210717_171041.jpg')";
    a++;
}
else if(a==4)
{ document.getElementById(idd).style.backgroundColor="red";
    document.getElementById("jjh").style.backgroundImage="url('People/People/IMG_20210717_171115.jpg')";
    a++;
}
else if(a==5)
{ document.getElementById(idd).style.backgroundColor="red";
    document.getElementById("jjh").style.backgroundImage="url('People/People/IMG_20210717_171313.jpg')";
a=1;
}
}
function chl_2(event)
{
    var id1="img"+b+"1";
if(b==1)
{
    document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_115105.jpg')";
b++;
}
else if(b==2)
{ document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_115215.jpg')";
    b++;
}
else if(b==3)
{ document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_134335.jpg')";
    b++;
}
else if(b==4)
{ document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_135408.jpg')";
b++;
}
else if(b==5)
{ document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_172705.jpg')";
b++;
}
else if(b==6)
{ document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_135146.jpg')";
b++;
}
else if(b==7)
{ document.getElementById(id1).style.backgroundColor="red";
    document.getElementById("jjh2").style.backgroundImage="url('nature/IMG_20210717_134812.jpg')";

b=1;}
}
function chl_3(event)
{
    var id2="img"+c+"2";
if(c==1)
{
    document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('nature/IMG_20210717_121123.jpg')";
c++;
}
else if(c==2)
{
    document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('nature/IMG_20210717_170429.jpg')";
    c++;
}
else if(c==3)
{document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('nature/IMG_20210717_170625.jpg')";
    c++;
}
else if(c==4)
{document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('nature/IMG_20210717_170747.jpg')";
    c++;
}
else if(c==5)
{document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('Background/g1.jpg')";
    c++;
}
else if(c==6)
{document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('Background/g2.jpg')";
    c++;
}
else if(c==7)
{document.getElementById(id2).style.backgroundColor="red";
    document.getElementById("jjh3").style.backgroundImage="url('Background/PicsArt_12-09-12.35.52.jpg')";
c=1;
}
}
function chl_4(event)
{
var id3="img"+d+"3";
if(d==1)
{document.getElementById(id3).style.backgroundColor="red";
    document.getElementById("jjh4").style.backgroundImage="url('Background/g3.jpg')";
    d++;
}
else if(d==2)
{document.getElementById(id3).style.backgroundColor="red";
    document.getElementById("jjh4").style.backgroundImage="url('Background/g4.jpg')";
    d++;
}
else if(d==3)
{document.getElementById(id3).style.backgroundColor="red";
    document.getElementById("jjh4").style.backgroundImage="url('Background/g5.jpg')";
    d++;
}
else if(d==4)
{document.getElementById(id3).style.backgroundColor="red";
    document.getElementById("jjh4").style.backgroundImage="url('still life/IMG_20210717_113950.jpg')";
    d=1;
}
}
function chl_5()
{
   
   var id4="img"+j+"4";
if(j==1)
{   
    document.getElementById(id4).style.backgroundColor="red";
    document.getElementById("jjh5").style.backgroundImage="url('butterfly/gt2.jpg')";
   

    j++;
    console.log(j);
}
else if(j==2)
{document.getElementById(id4).style.backgroundColor="red";
    document.getElementById("jjh5").style.backgroundImage="url('butterfly/gt3.jpg')";
    j++;
}
else if(j==3)
{document.getElementById(id4).style.backgroundColor="red";
    document.getElementById("jjh5").style.backgroundImage="url('butterfly/gt4.jpg')";
    j++;
}
else if(j==4)
{document.getElementById(id4).style.backgroundColor="red";
    document.getElementById("jjh5").style.backgroundImage="url('butterfly/gt5.jpg')";
    j++;
}
else if(j==5)
{document.getElementById(id4).style.backgroundColor="red";
    document.getElementById("jjh5").style.backgroundImage="url('butterfly/gt6.jpg')";
    j=1;
}
}
function to1p()
{
    document.getElementById("home").scrollIntoView(true);
}
function sendMail(params)
{
var tempParams={
    from_name:document.getElementById("name").value,
    to_name:document.getElementById("numn").value,
    message:document.getElementById("quer").value

};
emailjs.send('service_tt2ugpl', 'template_k4v6uhu',tempParams)
                    .then(function(res) {
                        console.log('SUCCESS!',res,);
                    }, function(error) {
                        console.log('FAILED...', error);
                    });

}