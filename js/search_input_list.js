        function keyupHandler(){
        // let a = search_input.value;
        const mu_list = document.querySelectorAll(".mu_list");
        const newArray = [];
        let counter = 0;

        for(const li of mu_list) {
          newArray.push({
            id : counter++,
            text : li.textContent
          });
        }

        // console.log(newArray)
        
          for(let i = 0; i < mu_list.length; i++) {
            // console.log(mu_list[i]);
            mu_list[i].classList.add("none");
          }
          const userValue = this.value;

          const valueMatch = newArray.filter(v => v.text.includes(userValue));
          // console.log(valueMatch);

          if (valueMatch.length > -1) {
            for(const v of valueMatch) {
              // mu_list[id]이 보여야 함.
              mu_list[v.id].classList.remove("none");
            }
          }
      } 

      const search_input = document.getElementById("search");
      window.onload=function(){
        search_input.addEventListener("keyup", keyupHandler);
      }