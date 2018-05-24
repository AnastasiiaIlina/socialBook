
//каждый пользователь - это объект со следующими полями 
const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

// посты 
const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};

const user = {
  login: 'nastya2112@gmail.com',
  password: '12345678'

}

//создания уникального идентификатора для поля id
const getId = () => "-" + Math.random().toString(36).substr(2, 9);

function SocialBook (users = [], posts = {}) {
    this.getAllUsers = function() {
      initialUsers.forEach(item => {console.log(item.id)});
    }; //возв массив всех пользователей

    this.getUserByLogin = function(login){
      const userlogin = initialUsers.find(user => user.login === login);
      console.log(userlogin);
     
    };// возв объект пользователя с совп логинов

    this.getUserStatus = function(userId){
      const a = initialUsers.find(item => item.id === userId);
       a ? console.log('active' ):  console.log('inactive');
       
    }; // ищет пользователя по id и возвращает 'active' если isActive true, в противном случае возвращает 'inactive'.

    this.addUser = function(user){
      let keys = Object.keys(user);
      keys.unshift('id');
      user.id = getId();
      keys.push('isActive');
      user.isActive = false;
      initialUsers.push(user);
     return user;
    }; //принимает объект user с полями email и password и добавляет ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в свойство users самого экземпляра.

    this.removeUserById = function(userId){
      const b = initialUsers.find(item => {
        if(item.id === userId){
        let indexToRemove = initialUsers.findIndex(obj => obj.id == userId);
        initialUsers.splice(indexToRemove , 1);
        console.log(initialUsers);
        }
      });
    }; //удаляет пользователя из массива пользователей по полю id

    this.getUsersCount=function() {
      let arr= [];
     initialUsers.forEach(item =>arr.push(item.id));
      console.log(`Общее количество пользователей: ${arr.length} человека (-к)`);
    }; //возвращает общее количество пользователей 

    this.getUserPosts = function (userId) {
     let arr = [];
      initialPosts[userId].forEach(item => arr.push(item.text));
      return console.log(arr);
    } //возвращает массив постов пользователя с id равным userId

    this.addPost = function (userId, post) {
      initialPosts[userId].push(post);
    };//- добавляет post в поле posts объекта socialBook по ключу userId. 

    this.removePost = function (userId, postId) {
      initialPosts[userId].find(item => {
        if(item.id === postId){
          const position = initialPosts[userId].indexOf(item);
          initialPosts[userId].splice(position,1)
          console.log( initialPosts[userId])
        }
      });
    }//удаляет post с id равным postId из поля posts объекта socialBook по ключу userId

    this.getAllLikes = function (userId) {
      const likes = initialPosts[userId].reduce((acc, value) => acc + value.likes,0);
      console.log(`Общее количество лайков - ${likes}.`);
    } //возвращает сумму всех полей likes постов пользователя с id равным userId

    this.addPostLike = function (userId, postId) {
      initialPosts[userId].forEach( item => {
        if (itemlid = postId) {item.likes+=1;
        console.log(item);
        }
      });
      
    } //увеличивает значение поля likes на 1 у поста с id равным postId, для пользователя с id равным userId

    this.getPostsCount = function (userId) {
      console.log(`Общее к-тво постов пользователя с id ${userId}: ${initialPosts[userId].length}.`);
    } //возвращает общее количество постов пользователя с id равным userId
      
     
    


 }


const search = new SocialBook( initialUsers, initialPosts);
// search.getAllUsers();
// search. getUserByLogin( "mangozedog@mail.com");
// search.getUserStatus('-s19a6hqce');
// console.log(search.addUser(user));
// search.removeUserById("-e51cpd4di");
// search.getUsersCount();
// search.getUserPosts( "-qkpzenjxe");
// search.addPost("-s19a6hqce", {id: "1", text: "post #4", likes: 0} );
// search.removePost("-e51cpd4di", "-i03pbhy3s");
// search.getAllLikes("-qkpzenjxe");
// search.addPostLike("-e51cpd4di", "-9y6nkmlj4");
search.getPostsCount( "-e51cpd4di");




// console.log(initialPosts);






