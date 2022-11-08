$(function(){
    $("#one").click(
        function(){
            if($("#one").attr("src")=="OFFbulb.jpg")
            {
                $("#one").attr("src", "ONbulb.jpg");
            }
            else if($("#one").attr("src")=="ONbulb.jpg")
            {
                $("#one").attr("src", "Bluebulb.jpg");
            }
            else if($("#one").attr("src")=="Bluebulb.jpg")
            {
                $("#one").attr("src", "Pinkbulb.jpg");
            }
            else
            {
                $("#one").attr("src", "OFFbulb.jpg");
            }
            
        });
    $("#btn").click(
        function(){
            
            var v1=$("#one").val();
            var v2=$("#two").val();
            for(; v1<=v2 ; v1++)
            {
                $("body").append("<p>"+v1+"</p>")
            }

            
            }
        );
        
    
});