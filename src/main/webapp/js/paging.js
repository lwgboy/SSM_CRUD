// 显示分页信息
function build_page_info(result) {
    $("#page_info_area").empty();

    $("#page_info_area").append("当前" + result.extend.pageInfo.pageNum + " 页，总"
        + result.extend.pageInfo.pages + " 页, 总" + result.extend.pageInfo.total + "条记录");
}

// 显示分页条
function build_page_nav(result) {
    $("#page_nav_area").empty();

    // 构建元素
    var ul = $("<ul></ul>").addClass("pagination");
    var firstPageLi = $("<li></li>").append($("<a></a>").append("首页").attr("href", "#"));
    var prePageLi = $("<li></li>").append($("<a></a>").append("&laquo;"));
    if(result.extend.pageInfo.hasPreviousPage == false){
        prePageLi.addClass("disabled");
    }else {
        prePageLi.click(function () {
            toPage(result.extend.pageInfo.pageNum - 1);
        });
    }

    //为元素添加单击监听事件
    firstPageLi.click(function(){
        toPage(1);
    });

    var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
    var lastPageLi = $("<li></li>").append($("<a></a>").append("尾页").attr("href", "#"));
    if(result.extend.pageInfo.hasNextPage == false){
        nextPageLi.addClass("disabled");
    }else {
        nextPageLi.click(function(){
            toPage(result.extend.pageInfo.pageNum + 1);
        });
    }
    //为元素添加单击监听事件
    lastPageLi.click(function () {
        toPage(result.extend.pageInfo.pages);
    });

    // 添加 首页 和 前一页
    ul.append(firstPageLi).append(prePageLi);

    $.each(result.extend.pageInfo.navigatepageNums, function (index, item) {
        var numLi = $("<li></li>").append($("<a></a>").append(item));
        if (result.extend.pageInfo.pageNum == item) {
            numLi.addClass("active");
        }
        numLi.click(function () {
            toPage(item);
        });
        ul.append(numLi);
    });
    //添加 下一页 和 尾页
    ul.append(nextPageLi).append(lastPageLi);
    var navEle = $("<nav></nav>").append(ul);
    navEle.appendTo("#page_nav_area");
}