// const quotesURL = "https://dummyjson.com/quotes";

// fetch(quotesURL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const result = document.querySelector(".result");
//     const random = Math.floor(Math.random() * 30);
//     result.querySelector(".quote").innerHTML = data.quotes[random].quote;
//     result.querySelector(
//       ".author"
//     ).innerHTML = `-${data.quotes[random].author}`;
//   })
//   .catch((error) => console.log(error));

function addCoffeeList(obj, gallery) {
  let nameIndex = exportName(obj);
  let imgIndex = exportUrl(obj);
  let tagArray = [];
  for (let i = 0; i < obj.length; i++) {
      let listTag = `<li><a class="coffee-thumbnail" href="#">
      <div class="coffee-img">
      <img src="${imgIndex[i]}" alt="${imgIndex[i].substr(4,imgIndex[i].length)}"/>
      </div><p class="coffee-name">${nameIndex[i]}</p></a></li>`
      tagArray.push(listTag);
  }
  
  let tagToString = tagArray.join('');
  gallery.innerHTML = tagToString;

};