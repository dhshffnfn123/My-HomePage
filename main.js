const viewBtn = document.getElementById('hello_btn');

viewBtn.onclick = function() {
  window.scroll({top:1013, behavior: 'smooth'})
}







const introBox = document.getElementById('introduce_box');
const crcBox = document.getElementById('crc_box');
const skill = document.getElementById('skill');
const chart = document.getElementById('chart');
const pf1 = document.getElementById('project1_box');
const pf2 = document.getElementById('project2_box');

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop;

    console.log('Current scroll : ' + scrollLocation);

    if (scrollLocation >= 980 && scrollLocation <= 1030) {
        introBox.classList.add('secondAni');
        crcBox.classList.add('secondAni2');
    }

    if (scrollLocation >= 1700) {
      skill.classList.add('skillAni');
      chart.classList.add('chartAni');
    }

    if (scrollLocation >= 2400) {
      pf1.classList.add('portfolio1');
      pf2.classList.add('portfolio2');
    }

})






$(window).ready(function(){
    draw(101, '.pie-chart1', 'black');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }
 
 
 function replay(){
   draw(100, '.pie-chart1', '#ccc');
 }

 const lists = document.querySelectorAll ('.list_name');

 lists[0].onclick = function() {
    draw(91, '.pie-chart1', '#b13838');
    document.querySelector('#text_list').style.marginLeft="2650px"
    document.querySelector('#skill_title').innerHTML="HTML"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="HTML을 이용하여 원하는 모양의 웹 페이지를 구현할 <br> &nbsp;수 있으며 각 요소의 속성과 기능을 응용할 수 있습니다."
    document.querySelector('#skill_per').innerHTML="90%"
    document.querySelector('#skill_per').style.borderBottom="solid 5px brown"
  }
  lists[1].onclick = function() {
    draw(91, '.pie-chart1', 'cornflowerblue');
    document.querySelector('#text_list').style.marginLeft="1790px"
    document.querySelector('#skill_title').innerHTML="CSS"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="CSS를 이용하여 요소를 자유자재로 다룰 수 있으며 <br> &nbsp역동적이고 부드러운 효과를 넣을 수 있습니다."
    document.querySelector('#skill_per').innerHTML="90%"
    document.querySelector('#skill_per').style.borderBottom="solid 5px cornflowerblue"
  } 
  lists[2].onclick = function() {
    draw(81, '.pie-chart1', 'orange');
    document.querySelector('#text_list').style.marginLeft="980px"
    document.querySelector('#skill_per').innerHTML="80%"
    document.querySelector('#skill_title').innerHTML="JAVA"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="JAVA를 이용하여 웹 페이지의 데이터베이스 연동, <br>&nbsp;파일 관리 및 다양한 기능을 구현할 수 있습니다.";
    document.querySelector('#skill_per').style.borderBottom="solid 5px orange"
  }
  lists[3].onclick = function() {
    draw(81, '.pie-chart1', 'yellow');
    document.querySelector('#text_list').style.marginLeft="-50px"
    document.querySelector('#skill_per').innerHTML="80%"
    document.querySelector('#skill_title').innerHTML="Java Script"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="Java Script와 JQuery를 이용하여 CSS로 할 수 없는 <br>&nbsp;기능 및 서버연결 등을 할 수 있습니다.";
    document.querySelector('#skill_per').style.borderBottom="solid 5px yellow"
  }
  lists[4].onclick = function() {
    draw(81, '.pie-chart1', 'rgb(139, 103, 180)');
    document.querySelector('#text_list').style.marginLeft="-1000px"
    document.querySelector('#skill_per').innerHTML="80%"
    document.querySelector('#skill_title').innerHTML="JSP"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="JSP의 JSTL을 이용하여 DB의 데이터를 불러올 수 <br>&nbsp;있으며 상황에 따라 원하는 값을 불러올 수 있습니다.";
    document.querySelector('#skill_per').style.borderBottom="solid 5px rgb(139, 103, 180)"
  }
  lists[5].onclick = function() {
    draw(61, '.pie-chart1', 'rgb(52, 255, 103)');
    document.querySelector('#text_list').style.marginLeft="-1870px"
    document.querySelector('#skill_per').innerHTML="60%"
    document.querySelector('#skill_title').innerHTML="Spring"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="Spring을 이용하여 쉽고 빠른 개발환경을 구축할 수 <br>&nbsp;있으며 lombok, log4j, mybatis 등을 이용할 수 있다.";
    document.querySelector('#skill_per').style.borderBottom="solid 5px rgb(41, 230, 24)"
  }
  lists[6].onclick = function() {
    draw(71, '.pie-chart1', 'rgb(0, 240, 168)');
    document.querySelector('#text_list').style.marginLeft="-2760px"
    document.querySelector('#skill_per').innerHTML="70%"
    document.querySelector('#skill_title').innerHTML="SQL"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="SQL을 이용하여 원하는 테이블 구조를 만들 수 있으며 <br>&nbsp;필요한 데이터를 출력할 수 있다.";
    document.querySelector('#skill_per').style.borderBottom="solid 5px rgb(0, 240, 168)"
  }
  lists[7].onclick = function() {
    draw(71, '.pie-chart1', 'rgb(46, 46, 46)');
    document.querySelector('#text_list').style.marginLeft="-3670px"
    document.querySelector('#skill_per').innerHTML="70%"
    document.querySelector('#skill_title').innerHTML="GitHub"
    document.querySelector('#skill_title').style.fontFamily="Righteous, cursive"
    document.querySelector('#skill_text').innerHTML="GitHub를 이용하여 작업물의 관리를 유용하게 할 수 <br>&nbsp;있으며, 공유된 코드를 응용할 수 있다.";
    document.querySelector('#skill_per').style.borderBottom="solid 5px rgb(46, 46, 46)"
 }