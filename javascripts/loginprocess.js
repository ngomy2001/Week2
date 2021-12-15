window.addEventListener('load', function () {
  // localStorage.setItem('username', 'admin1');
  // Mocking users data
  const users = [
    {
      username: 'admin1',
      password: 'admin1',
    },
    {
      username: 'admin2',
      password: 'admin2',
    },
  ];

  // function getAccount() {
  //   var username = document.getElementById('username').value;
  //   console.log(username);
  //   var password = document.getElementById('password').value;
  //   for (var i = 0; i < users.length; i++) {
  //     if (username == users[i].username && password == users[i].password) {
  //       console.log('Login successfull!');
  //       localStorage.setItem('username', JSON.stringify(username));
  //       window.location.href = 'index.html';
  //       return;
  //     } else {
  //       console.log('Login failed!');
  //       return;
  //     }
  //   }
  // }

  const checkLogin = (users, username, password) => {
    const isLoggedIn = users.some(
      (user) => user.username === username && user.password === password
    );
    return isLoggedIn;
  };

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;

    var password = document.getElementById('password').value;

    const result = checkLogin(users, username, password);

    // Check if user login failed
    if (!result) {
      console.log('Login failed!');
      window.location.href = 'login.html';
      return;
    }
    // User logged successfully, set username into localstorage and direct to index page
    console.log('Login successfull!');
    localStorage.setItem('username', JSON.stringify(username));
    window.location.href = 'index.html';
  });
});
