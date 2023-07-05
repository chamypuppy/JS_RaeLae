window.addEventListener('DOMContentLoaded', (event) => {

fetch('https://raw.githubusercontent.com/chamypuppy/JS_RaeLae/main/json/all_mu_list.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.today.length); // 문자열로 변환된 JSON 데이터 출력
      console.log(data.today.length);
      const JSON_Data = data.today;
      const todayCount = JSON_Data.length;
      // const todayRandom = Math.floor(Math.random() * todayCount)
      // console.log(todayRandom);
      

      let ran_num = [];
      for (let i = 0; i < todayCount; i++){
        ran_num.push(i);
      }
      // console.log(ran_num);


    for(let i = ran_num.length - 1; i > -1; i--){
      /** 업데이트 되는 최신곡들을 앞에 출현 */

    // 엘리먼트 요소들 만들기
    const ul = document.querySelector("section ul");
    const mu_list = document.createElement("li");
    const mu_info = document.createElement("div");
    const title = document.createElement("h4");
    const artist = document.createElement("span");
    const album = document.createElement("span");
    const nums_div = document.createElement("div");
    const tj_div = document.createElement("div");
    const ky_div = document.createElement("div");
    const fav_div = document.createElement("div");
    const tj = document.createElement("span"); // tj 문구
    const tjNum = document.createElement("span");
    const ky = document.createElement("span"); // ky 문구
    const kyNum = document.createElement("span");
    const favIcon = document.createElement("span");
    
  // 클래스 네임 부여하기
  mu_list.className = "mu_list";
  mu_info.className = "mu_info";
  title.className = "title";
  artist.className = "artist";
  album.className = "album";
  nums_div.className = "nums_div";
  tj_div.className = "tj_div";
  // tj.className = "tj";
  tjNum.className = "tj_num";
  ky_div.className = "ky_div";
  // ky.className = "ky";
  kyNum.className = "ky_num";
  fav_div.className = "fav_div";
  // favIcon의 클래스는 밑에서 setAttribute로 넣어줌

  // 랜덤 인덱스 생성하기
  

  // tjNum과 kyNum에 각각 노래방 번호 넣기
  tjNum.innerHTML = `${data.today[i].brand_tj_num}`;
  kyNum.innerHTML = `${data.today[i].brand_ky_num}`;

  // tj나 ky 중에 값이 없어 null일 경우
  if (tjNum.innerHTML == "null") {
    tjNum.innerHTML = "&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;";
  } else if (kyNum.innerHTML == "null") {
    kyNum.innerHTML = "&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;";
  }

  // TJ, KY 글자 넣기
  tj.innerHTML = "TJ";
  ky.innerHTML = "KY";
  favIcon.setAttribute("class", "far fa-heart fav_icon");

  // 나머지 노래명, 가수명, 앨범명 넣기
  title.innerHTML = `${data.today[i].title}`
  artist.innerHTML = `${data.today[i].artist}`
  album.innerHTML = `${data.today[i].album}`

  //div에 요소 넣기
  tj_div.appendChild(tj);
  tj_div.appendChild(tjNum);
  ky_div.appendChild(ky);
  ky_div.appendChild(kyNum);
  fav_div.appendChild(favIcon);
  

  // console.log(tj_div, ky_div)


  // div 넣기
  nums_div.appendChild(tj_div);
  nums_div.appendChild(ky_div);
  nums_div.appendChild(fav_div);


  //나머지 요소들 넣기
  mu_info.appendChild(title);
  mu_info.appendChild(artist);
  mu_info.appendChild(album);
  mu_list.appendChild(mu_info);
  mu_list.appendChild(nums_div);

  //마지막으로 ul에 li들 넣기
  ul.appendChild(mu_list);

  // 확인
  // console.log(ul.appendChild(mu_list));


  }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  });