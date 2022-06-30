$('.c-button__file--selection input').on('change', function () {
    var file = $(this).prop('files')[0];
    $(this).closest('.c-button__file--selection').find('.file-name').text(file.name);
   });