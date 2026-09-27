
        let form = document.querySelector('#userForm');
        let name = document.querySelector('#name');
        let role = document.querySelector('#role');
        let bio = document.querySelector('#bio');
        let photo = document.querySelector('#photo');

        const userManager = {
            users: [],
            init: function () {
                form.addEventListener('submit', this.submitForm.bind(this))
            },
            submitForm: function (e) {
                e.preventDefault();
                this.addUsers();
            },
            addUsers: function () {
                this.users.push({
                    name: name.value,
                    role: role.value,
                    bio: bio.value,
                    photo: photo.value,
                })
                form.reset();
                this.renderUi();
            },

            renderUi: function () {
                document.querySelector('#usersContainer').innerHTML = '';
                this.users.forEach(function (user) {
                    let usercard = document.createElement('div');
                    usercard.classList.add('user-card');





                    let cardbanner = document.createElement('div');
                    cardbanner.classList.add('card-banner');

                    let cardcontent = document.createElement('div');
                    cardcontent.classList.add('card-content');

                    let cardavatorwrap = document.createElement('div');
                    cardavatorwrap.classList.add('card-avator-wrap');

                    let img = document.createElement('img');
                    img.classList.add('user-avatar');
                    img.src = user.photo;
                    let h3 = document.createElement('h3');
                    h3.classList.add('user-name');
                    h3.textContent = user.name;
                    let span = document.createElement('span');
                    span.classList.add('user-role');
                    span.textContent = user.role;
                    let p = document.createElement('p');
                    p.classList.add('user-bio');
                    p.textContent = user.bio;
                    let cardfooter = document.createElement('div');
                    cardfooter.classList.add('card-footer');

                    let btn = document.createElement('button');
                    btn.classList.add('btn-card');
                    btn.setAttribute('type', 'button');
                    btn.textContent = 'View profile';
                    //delete btn
                    let deletebtn = document.createElement('button');
                    deletebtn.setAttribute('type', 'button');
                    deletebtn.textContent = 'Delete';
                    deletebtn.classList.add('delBtn');
                    deletebtn.addEventListener('click', function () {
                        userManager.removeUser(user);
                    });
                    usercard.prepend(cardbanner);
                    usercard.append(cardcontent);
                    usercard.addEventListener('mouseover', function () {
                        deletebtn.style.display = 'initial';
                    })
                    usercard.addEventListener('mouseout', function () {
                        deletebtn.style.display = 'none';
                    });
                    //cardcontent: 
                    cardcontent.prepend(cardavatorwrap);
                    cardavatorwrap.append(img);

                    cardcontent.append(h3);
                    cardcontent.append(span);
                    cardcontent.append(p);

                    cardcontent.append(cardfooter);
                    //footer 
                    cardfooter.append(btn);
                    cardfooter.append(deletebtn);

                    document.querySelector('#usersContainer').append(usercard);

                })
            },
            removeUser: function (userToRemove) {
                this.users = this.users.filter(function (user) {
                    return user !== userToRemove;
                })
                this.renderUi();
            }



        }
        userManager.init(); 
 