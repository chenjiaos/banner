/**
 * Created by hp on 2017/5/26.
 */
$('.border ul li').click(function(){
    let num=$(this).index()
    $('.border ul li').eq(num).addClass('titlecolor').siblings().removeClass('titlecolor')
    $('.border>div').eq(num).removeClass('display').siblings('div').addClass('display')
})
function login(){
    let data={
        username:$('.login .username').val(),
        password:$('.login .password').val()
    }
    $.post('http://localhost:4000/login',data,function(aa){
        if(aa=='登录成功'){
            $('.wrap').css("display","none")
            alert(aa)
        }else{
            alert(aa)
        }
    })
}
function register(){
    let data={
        username:$('.register .username').val(),
        password:$('.register .password').val(),
        phone:$('.register .phone').val(),
        email:$('.register .email').val(),
        address:$('.register .address').val()
    }
    $.post('http://localhost:4000/register',data,function(result){
        alert(result)
    })
}
function loginpage(){
    $('.wrap').css("display","block")
}
function closepage(){
    $('.wrap').css("display","none")
}
let timer
let num=0
let n=0
function banner(){
    
    timer=setInterval(function(){
        num+=1
        if(num==5){
            $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current')
        }
        if(num>5){
            num=0
            $('.banner ul').css({'left':-100*num+'%'})
            num=1
        }
        $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
        $('.banner ul').animate({'left':-100*num+'%'})
    },2000)
}
banner()
$('.banner').hover(function(){
    clearInterval(timer)
},function(){
    banner()
}).css('cursor','pointer')
$('.banner ol li').click(function() {
    num=$(this).index()
    if(num==0){
        $('.banner ul').animate({'left':-100*num+'%'})
    }
    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
    $('.banner ul').animate({'left':-100*num+'%'})
});
$('.left').click(function(){
    num=num-1
    if(num<0){
        num=5
        $('.banner ul').css({'left':-100*num+'%'})
        num=4
    }
    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
    $('.banner ul').animate({'left':-100*num+'%'})
})
$('.right').click(function(){
    num=num+1
    if(num==5){
        $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current')
    }
    if(num>5){
        num=0
        $('.banner ul').css({'left':-100*num+'%'})
        num=1
    }
    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
    $('.banner ul').animate({'left':-100*num+'%'})
})