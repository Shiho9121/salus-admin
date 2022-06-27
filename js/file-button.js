$('.p-file-button__selection input').on('change', function () {
    var file = $(this).prop('files')[0];
    $(this).closest('.p-file-button__selection').find('.file-name').text(file.name);
   });