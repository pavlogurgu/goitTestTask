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

tweetsCount.textContent = localStorage.numOfTweetsStore.slice(1, -1);
followerCount.textContent = localStorage.numOfFollowsStore.slice(1, -1);
followBtn.style.backgroundColor = localStorage.btnColor;
followBtn.textContent = localStorage.btnText.slice(1, -1);

function onBtnClick(event) {
  event.preventDefault();

  if (state.isFollowing !== true) {
    state.numOfTweetsStore += 1;
    state.numOfFollowsStore += 1;
    state.isFollowing = true;

    localStorage.setItem(
      'numOfTweetsStore',
      JSON.stringify(state.numOfTweetsStore.toLocaleString('eng'))
    );
    localStorage.setItem(
      'numOfFollowsStore',
      JSON.stringify(state.numOfFollowsStore.toLocaleString('eng'))
    );
    localStorage.setItem('isFollowing', JSON.stringify(state.isFollowing));

    tweetsCount.textContent = localStorage.numOfTweetsStore.slice(1, -1);
    followerCount.textContent = localStorage.numOfFollowsStore.slice(1, -1);
    followBtn.style.backgroundColor = '#5CD3A8';
    followBtn.textContent = 'Following';

    localStorage.setItem(
      'btnColor',
      JSON.stringify(followBtn.style.backgroundColor)
    );
    localStorage.setItem('btnText', JSON.stringify(followBtn.textContent));
  } else {
    state.numOfTweetsStore -= 1;
    state.numOfFollowsStore -= 1;
    state.isFollowing = false;

    localStorage.setItem(
      'numOfTweetsStore',
      JSON.stringify(state.numOfTweetsStore.toLocaleString('eng'))
    );
    localStorage.setItem(
      'numOfFollowsStore',
      JSON.stringify(state.numOfFollowsStore.toLocaleString('eng'))
    );
    localStorage.setItem('isFollowing', JSON.stringify(state.isFollowing));

    tweetsCount.textContent = localStorage.numOfTweetsStore.slice(1, -1);
    followerCount.textContent = localStorage.numOfFollowsStore.slice(1, -1);
    followBtn.textContent = 'Follow';
    followBtn.style.backgroundColor = '#EBD8FF';

    localStorage.setItem(
      'btnColor',
      JSON.stringify(followBtn.style.backgroundColor)
    );
    localStorage.setItem('btnText', JSON.stringify(followBtn.textContent));
  }
}
