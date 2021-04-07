function showSection(navButton) {
    console.log(navButton);
    let sections = $('section').toArray();
    $.each(sections, function() {
        let sectionId = $(this).attr('id');
        if (navButton == sectionId ) {
            $(this).removeClass('hide');
        }
    }) 
}

$('.nav-btn').click(function() {
    let navButton = $(this).attr('name');
    showSection(navButton);
})