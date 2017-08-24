$(function(){
    $(window).on('load',function(){//网页加载的事件
        imgLocation();
        var dataImg={
            "data":[
                {'src':'1.jpg'},
                {'src':'2.jpg'},
                {'src':'3.jpg'},
                {'src':'4.jpg'},
                {'src':'5.jpg'},
                {'src':'6.jpg'},
                {'src':'7.jpg'},
                {'src':'8.jpg'},
                {'src':'9.jpg'},
                {'src':'10.jpg'},
                {'src':'11.jpg'},
                {'src':'12.jpg'},
                {'src':'13.jpg'},
            ]
        }//模拟加载的数据
        window.onscroll=function(){//鼠标滑动事件
            if(scrollside()){//返回true执行
                $.each(dataImg.data,function(index,value){//遍历dataImg对象中的数据
                    var box=$('<div>').addClass('box').appendTo($('.content'));//动态创建一个div并添加到类名为content的div中
                    var img=$('<div>').addClass('img').appendTo(box);
                    console.log('image/'+$(value).attr('src'));//获取新的加载的图片的路径
                    $('<img>').attr('src','image/'+$(value).attr('src')).appendTo(img);//动态创建img标签，并设置src属性
                });
                imgLocation();
            }
        }
    })
})

//获取一些位置，及滚动加载的条件的函数
function scrollside(){
    var box=$('.box');
    var lastboxHeight=box.last().get(0).offsetTop+parseInt(box.last().height()/2);//获取最后一张图片的一半位置距离顶部的高度
    var documentHeight=$(document).height();//获取可视区域的高度
    var scrollHeight=$(window).scrollTop();//获取鼠标滑动的高度
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;//当鼠标滑动的距离超过图片位置一半的距离时返回true，开始加载
}


//将后面的图片填充前面的空白位置的函数
function imgLocation(){
    var box=$('.box');
    var boxWidth=box.eq(0).width();//获取一张图片的宽度
    var num=parseInt($(window).width()/boxWidth);//获取一排能放几张图片
    var boxArr=[];//存放盒子高度的数组
    box.each(function(index,value){//index为图片的索引，value为一个元素对象
        var boxHeight=box.eq(index).height();//获取每一个图片盒子的高度
        if(index<num){
            boxArr[index]=boxHeight;//将第一排的图片盒子的高度放进数组里
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);//获取第一排的盒子的最小的高度
            var minboxIndex=$.inArray(minboxHeight,boxArr);//获取最小高度盒子的索引
            $(value).css({
                'position':'absolute',
                'top':minboxHeight,
                'left':box.eq(minboxIndex).position().left
            })//设置新的盒子的位置
            boxArr[minboxIndex]+=box.eq(index).height();//将最小高度盒子的高度再加上新填充进来的盒子的高度
;        }
    })
}