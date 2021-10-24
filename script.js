const LinksSocialMedia = {
  github: 'iagopedro',
  youtube: '/channel/UCtV3ciGwoQ9mAraWTMvBDIQ',
  instagram: 'iagopedro.js',
  facebook: 'iago.pedro.7',
  twitter: '',
}



function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      githubUserName.textContent = data.name
      githubUserBio.textContent = data.bio
      githubUserLogin.textContent = data.login
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()