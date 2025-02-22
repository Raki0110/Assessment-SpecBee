const speakers = [
    {
      name: "John Doe",
      title: "Chief Marketing Officer",
      company: "Acme Corp",
      image: "https://s3-alpha-sig.figma.com/img/d6a6/fffd/2100d987b5946aa1df33cf0f6c34a418?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYhMpNtk6RjWLZdmYrzfP1zFozI6fXQnvB8n8gf6tY79DPG9fpkQtA20Pbr2JqksXmG7TZefofZ5X3q5eUD38KZSxw11jn8KsFqHagfjphpS6Cmx6AhhR9z7f5pCqhuZwoQWkFKYvG5DnNo~L2vcs0sQCXscWhcjUYaACWCnnqWtq-MPwsTV4xbdVYTD9YkuO6nMEJlijMJO9WERDNx32VaT2C~NnoHVY~QvZ213jjI0bb1mZN0KI~flKmLDrZqDg38RySi~yNhZ9c98ndVfnNw7Z~CwSVriuL-LZyFld--vDoXgTDGl3zWgILBm13Sb6wFdqW-H~65n~9riUvewLg__",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
      name: "John Doe",
      title: "Chief Engagement Officer",
      company: "Acquia",
      image: "https://s3-alpha-sig.figma.com/img/9de3/b8aa/4e6fd86d00bc645311899b3fbcca52d5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ne4nBPHEAPF2Q-5djn3VQxJMdeknN9U3u9~MdstoJyOvVqr3bX~w96Kw99QiV1IO6Y6i8kSwVzEnaAIi8dw7GG-M-kLf3coi3iyYHhnOOHOL3y680GlTlLlWcaCnQzUd4tj7M8g3Z9JqFBExIbaxIy1C3EZRs-9IZD-oVP1L-R5~~iSsVB70dAcLGrYW9ynubD34TUuWlpO60IhTKDTSCETMFCZnwJM6R7f04MoGEQULyt0UCO0ng5jkxSnffZzpLHLPiFd3Qo~vUbm4tTEAMV6HlZ6Za288srDJhhQCUU1eD8A8XuFlRfIynNZbG0SHrFPi45qyQDhFGXy5fxAcsA__",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
      name: "John Doe",
      title: "Chief Technical Developer",
      company: "Pantheon",
      image: "https://s3-alpha-sig.figma.com/img/9134/0d19/81845f21043dd8f5192da248767c4eae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L~nJ04FWc5IOg~xbyE2jiEoCvK5bse~u-wOPzGLSyBHqZHS3zxinefgzOEyTOGo-y3CAsReqDHbSxIZl5jy3TNZqON9ZUwg43TacQjXgnCXreogxe39u-1v7eCN-U9buHo2cvhDZWfNnCr7-m40I1AEDGUyTFdC-Sq0-Kc8AMjfgAa-B-HfiTj7i0e7tKMsha7A5VE1dvGLKPIuXnA3EFioadva0uDJA-9w~i0MQG51WbFy~heC381sZC4CjPM6fz2o~pPqFACZ7l7aRafCbml1hVNBitMQzxApE~-uKmlhjkgV9N-zVSvBNn5~CdXGYY-eLOyaPkh7xVPShkp6BGw__",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
      name: "John Doe",
      title: "Chief Marketing Officer",
      company: "Specbee",
      image: "https://s3-alpha-sig.figma.com/img/aeba/3e61/75255eef4aafbeaf378e32d61894f628?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xiwev3KIW2VJCdsxAkmGCvdfPXYKw2R8vSM1Q~lbEdHttacECHafOArSyxY5xw1x5rtBj03k~sNIAN-ccIUf0Hw3Cy3aVSxXjpYcS91B6HMh7daclSJlONqswucI0cNePESk77HJSJgadEpeYeYccO85VgdxNWqBtNUlsB1iVfwYegjqId7yRij1iYGodcOJqw-FbN0zjy8huui7NmuQGMH-XIxk5MvpO6ZCRGJZ-dlWONtd7zU7Hcvw~z-JfaLdgB-kSXi0p4MJ5rf6SIABdz~YxkKeayf7FQi3TGyFND0wGI1hDpg1qxrjg8c22bcL7w2oE7gxbcsSA2VPg~KaHQ__",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    }
  ];
  
const carousel = document.getElementById('carousel');
const speakerDetail = document.getElementById('speakerDetail');
const closeDetail = document.getElementById('closeDetail');
const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailTitle = document.getElementById('detailTitle');
const detailCompany = document.getElementById('detailCompany');
const detailDescription = document.getElementById('detailDescription');

function populateCarousel() {
  speakers.forEach((speaker, index) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');

    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" />
      <h3>${speaker.name}</h3>
      <h4>${speaker.title}</h4>
      <p>${speaker.company}</p>
    `;

    speakerCard.addEventListener('click', () => showDetail(index));
    carousel.appendChild(speakerCard);
  });
}

function showDetail(index) {
  const speaker = speakers[index];
  detailImage.src = speaker.image;
  detailName.textContent = speaker.name;
  detailTitle.textContent = speaker.title;
  detailCompany.textContent = speaker.company;
  detailDescription.textContent = speaker.description;

  speakerDetail.style.display = 'flex';
}

function closeSpeakerDetail() {
  speakerDetail.style.display = 'none';
}

closeDetail.addEventListener('click', closeSpeakerDetail);

window.onload = populateCarousel;

