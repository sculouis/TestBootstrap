$(document).ready(function () {

    //* 增加表格列
    function addRowData(items){
        console.log("data type:" + typeof items);
        //json data intrduction
        //寫log
        //陣列函數
        //比較運算式
        //過濾為職稱
        var titles = items.filter(function(item){
            return item.kind == "title"; 
        })
        //取得每一筆
        titles.forEach(function(item) {
            console.log(item);
        });
        //轉換成html要呈現的tag
        var titleTable = $("#titleTable > tbody");
        
        var tagTitles = titles.map(function(title){
            return "<tr><td>" + title.id +  "</td><td>" + title.name +  "</td></tr>";

        })

        tagTitles.forEach(function(item){
            titleTable.append(item);
        })
    }

    $.getJSON("data/items.json",
        function (data, textStatus, jqXHR) {
            console.log(data);
            addRowData(data);
        }
    );
});