$(document).ready(function() {
    $(".create").on("click", function() {
        $(".container-form").css("visibility", "visible");
        $(".cancel").on("click", function() {
            $(".container-form").css("visibility", "hidden");
        })
    })


    for(let i = 0;i < $("ul li button").length; i++) {
        $("ul li button").on("click", function() {
            $(this).parent().css("visibility", "hidden");
        })
    }

    
    $("input[type='checkbox']").on("change", function() {
        $(".filled").css("text-decoration", "none");
        if($("input[type='checkbox']").prop("checked")) {
            $(".filled").css("text-decoration", "line-through");
        }
    }) 
})

