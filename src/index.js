const followBtn = document.querySelector('.followBtn');
let tweetsCount = document.querySelector('.tweetsCount');
let followerCount = document.querySelector('.followersCount');

followBtn.addEventListener('click', onBtnClick);

const settings = {
  numOfTweetsStore: 777,
  numOfFollowsStore: 100500,
  isFollowing: false,
};

localStorage.setItem('data', JSON.stringify(settings));
const raw = localStorage.getItem('data');
const state = JSON.parse(raw);

localStorage.setItem('numOfTweetsStore', JSON.stringify(777));
tweetsCount.textContent = JSON.parse(localStorage.getItem('numOfTweetsStore'));
followerCount.textContent = JSON.parse(
  localStorage.getItem('numOfFollowsStore')
);

followBtn.style.backgroundColor = localStorage.btnColor;
followBtn.textContent = localStorage.btnText.slice(1, -1);
following = JSON.parse(localStorage.getItem('isFollowing'));

if (following !== true) {
  followBtn.style.backgroundColor = '#EBD8FF';
} else {
  followBtn.style.backgroundColor = '#5CD3A8';
}

function onBtnClick(event) {
  event.preventDefault();

  if (state.isFollowing !== true) {
    state.numOfFollowsStore += 1;
    state.isFollowing = true;

    localStorage.setItem(
      'numOfFollowsStore',
      JSON.stringify(state.numOfFollowsStore.toLocaleString('eng'))
    );
    localStorage.setItem('isFollowing', JSON.stringify(state.isFollowing));

    tweetsCount.textContent = JSON.parse(
      localStorage.getItem('numOfTweetsStore')
    );

    followerCount.textContent = JSON.parse(
      localStorage.getItem('numOfFollowsStore')
    );
    followBtn.style.backgroundColor = '#5CD3A8';
    followBtn.textContent = 'Following';

    localStorage.setItem(
      'btnColor',
      JSON.stringify(followBtn.style.backgroundColor)
    );
    localStorage.setItem('btnText', JSON.stringify(followBtn.textContent));
  } else {
    state.numOfFollowsStore -= 1;
    state.isFollowing = false;

    localStorage.setItem(
      'numOfFollowsStore',
      JSON.stringify(state.numOfFollowsStore.toLocaleString('eng'))
    );
    localStorage.setItem('isFollowing', JSON.stringify(state.isFollowing));
    tweetsCount.textContent = JSON.parse(
      localStorage.getItem('numOfTweetsStore')
    );

    followerCount.textContent = JSON.parse(
      localStorage.getItem('numOfFollowsStore')
    );
    followBtn.textContent = 'Follow';
    followBtn.style.backgroundColor = '#EBD8FF';

    localStorage.setItem(
      'btnColor',
      JSON.stringify(followBtn.style.backgroundColor)
    );
    localStorage.setItem('btnText', JSON.stringify(followBtn.textContent));
  }
}
