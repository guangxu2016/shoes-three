$(function () {
    var getFirstData = function () {
        $.ajax({
            type: "get",
            url: "/category/queryTopCategory",
            data: {},
            success: function (data) {
                console.log(data);
                var firstResult = template("firstTemplate", data);
                $(".sort-left ul").html(firstResult);
                // 点击一级分类，显示二级分类内容
                getSecondData(data.rows[0].id);
            }
        })
    }
    getFirstData();


    var getSecondData = function(id){
        $.ajax({
          type: 'get',
          url: ' /category/querySecondCategory',
          data: {
            id: id
          },
          success:function(data){
            // console.log(data);
            var secondResult = template('secondTemplate',data);
            $('.brand-list').html(secondResult);
    
          }
        })
      }


    // 点击某一个一级分类 动态显示二级分类
    $(".sort-left ul").on("tap","a",function() {
        $(".sort-left").find("a").removeClass("active");
        $(this).addClass("active");
        var id= $(this).attr("data-id");

        getSecondData(id);
    })


})