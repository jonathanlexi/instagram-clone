fetch('https://63b296615e490925c51c367c.mockapi.io/users')
.then(res => {return res.json()})
.then(data => {
         let data1= ""
         let data2= ""

    data.slice(1,20).forEach((item)=>{

       data1 += `
       <div class="post">
            <div class="info">

                <div class="user">
                    <div class="profile-pic"><img src=${item.avatar}  alt=""></div>
                    <p class="username">${item.name}</p>
                </div>

                <img src="img/dots.png" class="options" alt="">
            </div>

            <img src=${item.avatar} alt="" class="post-image">

            <div class="post-content">

                <div class="reaction-wrapper">
                    <img src="img/love.png" class="icon" alt="">
                    <img src="img/comment.png" class="icon" alt="">
                    <img src="img/send.png" class="icon" alt="">
                    <img src="img/save.png" class="save icon" alt="">
                </div>

                <p class="likes">1000 likes</p>
                <p class="description"><span>${item.name}</span>${item.description}</p>
                <p class="post-time">2 minutes ago</p>

                <div class="comment-wrapper">
                    <img src="img/smile.png" alt="" class="icon">
                    <input type="text" class="comment-box" placeholder="Add a comment">
                    <button class="comment-btn">post</button>
                </div>

            </div>
        </div>
       
       `
        document.getElementById('post').innerHTML = data1


        data2 += `
        <div class="status-card">
            <div class="profile-pic"><img src=${item.avatar} alt=""></div>
            <p class="username">${item.name}</p>
        </div>
        `
        document.querySelector('.status-wrapper').innerHTML = data2
       
        
    })

}).catch(err => {console.log(err);})


fetch('https://63b296615e490925c51c367c.mockapi.io/users')
.then(res => { return res.json()}).then(data => {
    let data3 = ""

    data.slice(15,21).forEach(item => {
        data3+=`
        <div class="profile-card" id="profile-card">
                    <div class="profile-pic">
                        <img src=${item.avatar} alt="">
                    </div>

                    <div class="profile-text">
                        <p class="username">${item.name}</p>
                        <p class="sub-text">follow by you</p>
                    </div>

                    <button class="switch-btn">follow</button>
                </div>

        `
    })

    document.querySelector('.suggestions').innerHTML = data3

})