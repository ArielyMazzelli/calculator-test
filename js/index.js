const d = document,
 $screen = d.querySelector(".screen"),
 $buttons = d.querySelectorAll(".btn");

 $buttons.forEach( btn =>{
    btn.addEventListener("click", ()=>{
        const btnPress = btn.textContent;
        
        if(btn.id === "c"){
            $screen.value = "0";
            return;
            }

        if (btn.id=== "delete"){
            if ($screen.value.length === 1 || $screen.value === "Error!") {
                $screen.value = "0"
            }
            $screen.value = $screen.value.slice(0 , -1)
            return;
        }    

        if (btn.id === "equal"){
            try {
                $screen.value = eval($screen.value);
            } catch (error) {
                $screen.value = "Error!";
            }
            return;
        }

        if($screen.value === "0" || $screen.value === "Error!"){
            $screen.value = btnPress
        }else{
            $screen.value += btnPress
        }

    
        

        console.log($screen.value);
    })
 });