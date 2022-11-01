$(document).ready(function(){
    $(".accordion").on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this)
            .next('.accordion-panel')
            .not(':animated')
            .slideToggle();
    });

    $(".tab-list").each(function() {
        console.log("hello");
        let $this = $(this),
        $tab = $this.find('li.active'),
        $link = $tab.find('a'),
        $panel = $($link.attr('href'));

        $this.on('click', '.tab-control', function(e) {
            console.log("hello");
            e.preventDefault();
            let $link = $(this);
            let id = this.hash;
            console.log(id);

            if(id !== $link.parent().is('.active')) {
                console.log("success");
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
            else{
                console.log("fail");
            }
        });
    });
});