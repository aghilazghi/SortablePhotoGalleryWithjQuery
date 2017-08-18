var thumbnailSpacing = 15;
$(document).ready(function(){

    $('.gallery .sorting').css('margin-bottom', window.thumbnailSpacing + 'px');
    $('.thumbnail_container a.thumbnail').addClass('showMe');

    positionThumbnail();
});
function positionThumbnail() {
    /* debug */ $('.debug-remainder').html('');

    var containerWidth = $('.photos').width();
    var thumbnailRow = 0;
    var thumbnailColumn = 0;
    var thumbnailWidth = $('a.thumbnail img:first-child').outerWidth() + window.thumbnailSpacing;
    var thumbnailHeight = $('a.thumbnail img:first-child').outerHeight() + window.thumbnailSpacing;
    var maxColumn = Math.floor(containerWidth / thumbnailWidth);

    $('.thumbnail_container a.thumbnail.showMe').each(function(index){
        var remainder = (index % maxColumn) / 100;
        var maxIndex = 0;
        /* debug */ $('.debug-remainder').append(remainder + ' - ');

        if(remainder == 0) {
            if(index != 0){
                thumbnailRow += thumbnailHeight;
            }
            thumbnailColumn = 0;
        } else {
            thumbnailColumn += thumbnailWidth;
        }

        $(this).css('display', 'block').animate({
            'opacity': 1,
            'top': thumbnailRow + 'px',
            'left': thumbnailColumn + 'px'
        }, 500);

        var newWidth = maxColumn * thumbnailWidth;
        var newHeight = thumbnailRow + thumbnailHeight;
        $('.thumbnail_container').css({
            'width': newWidth + 'px',
            'height': newHeight + 'px'
        });
    });
}

