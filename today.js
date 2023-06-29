fetch('./today.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // 문자열로 변환된 JSON 데이터 출력
    console.log("today".length);
    const todayCount = "today".length;
    const todayRandom = Math.floor(Math.random() * todayCount)
    console.log(todayRandom);
    const mu_list = document.querySelector(".mu_list");
    const title = document.querySelector(".title");
    const artist = document.querySelector(".artist");
    const album = document.querySelector(".album");
    const tjNum = document.querySelector(".tj_num");
    const kyNum = document.querySelector(".ky_num");
    title.innerHTML = data.today[todayRandom].title;
    artist.innerHTML = data.today[todayRandom].artist;
    album.innerHTML = data.today[todayRandom].album;
    tjNum.innerHTML = data.today[todayRandom].brand_tj_num;
    kyNum.innerHTML = data.today[todayRandom].brand_ky_num;
  })
  .catch(error => {
    console.log('Error:', error);
  });