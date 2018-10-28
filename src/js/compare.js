function loadCompare(isrefresh) {
    if (!$("#comparelist").html()) {
        isrefresh = true;
    }
    if (isrefresh == true) {
        $("#comparelist").load('index.php?act=compare&op=showcompare');
    }
}
function addCompare(gid) {
    gid = parseInt(gid);
    if (gid > 0) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: 'index.php?act=compare&op=addcompare&id=' + gid,
            async: false,
            success: function (data) {
                if (data.done == true) {
                    $("[nc_type='compare_" + gid + "']").addClass('selected');
                    loadCompare(true);
                    $("#content-compare").animate({right: '40px'});
                } else {
                    showDialog(data.msg);
                }
            }
        });
    } else {
        showDialog('参数错误');
    }
    $("#lockcompare").val('unlock');
}
function delCompare(gid, type) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'index.php?act=compare&op=delcompare&gid=' + gid + '&type=' + type,
        async: false,
        success: function (data) {
            if (data.done == true) {
                if (type == 'mini') {
                    if (gid == 'all') {
                        $("[nc_type^='compare_']").removeClass('selected');
                    } else {
                        $("[nc_type='compare_" + gid + "']").removeClass('selected');
                    }
                }
                if (type == 'mini') {
                    loadCompare(true);
                    $("#content-compare").animate({right: '40px'});
                } else {
                    go('index.php?act=compare&gids=' + data.gid_str);
                }
            }
            $("#lockcompare").val('unlock');
        }
    });
}
function initCompare() {
    $("[nc_type^='compare_']").bind('click', function () {
        if ($("#lockcompare").val() == 'unlock') {
            $("#lockcompare").val('lock');
            var data_str = '';
            eval('data_str =' + $(this).attr('data-param'));
            var gid = data_str.gid;
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                delCompare(gid, 'mini');
            } else {
                addCompare(gid);
            }
        }
    });
    $.getJSON('index.php?act=compare&op=checkcompare', function (data) {
        if (data) {
            $.each(data, function (i, val) {
                $("[nc_type='compare_" + val + "']").addClass('selected');
            });
        }
    });
}
