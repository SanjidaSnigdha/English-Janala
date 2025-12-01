const loadLessons=()=>{
 fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
 .then(res=> res.json()) //promise of json data
 .then((json) => displayLesson(json.data));

};

const removeActive=()=>{
  const lessonButtons=document.querySelectorAll(".lesson-btn");
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
  console.log(lessonButtons);
}

const loadLevelWord=(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
      removeActive(); // remove all active class
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      // console.log(clickBtn);
      clickBtn.classList.add("active"); // add active class
            displayLevelWord(data.data);

    });
};

const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById("word-container");
     wordContainer.innerHTML="";

     if(words.length == 0){
           wordContainer.innerHTML=`
              <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
              <img class="mx-auto" src="./assets/alert-error.png" />
        <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
      </div>
           `;

      return;
     }

    // {
    //     "id": 82,
    //     "level": 1,
    //     "word": "Car",
    //     "meaning": "গাড়ি"
    // }
 
  words.forEach(word =>{
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML="i am js";
    wordContainer.append(card);
   })

}

const displayLesson=(lessons)=>{
        //  1. get the container & empty
        const levelContainer = document.getElementById("level-container");
        levelContainer.innerHTML="";
        // 2. get into every lessons
        for (let lesson of lessons) {
            // 3. create Element
            console.log(lesson)
         const btnDiv=document.createElement("div");
         btnDiv.innerHTML = `
     <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
     <i class="fa-solid fa-bookmark"></i>Lesson -${lesson.level_no}</button>

         `;
        // 4. append into container
        levelContainer.append(btnDiv);
        }
}
loadLessons();