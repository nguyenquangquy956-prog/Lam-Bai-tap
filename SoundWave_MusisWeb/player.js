(() => {
  const audio = document.querySelector('#audio-player');
  const playButtons = document.querySelectorAll('[data-audio-play]');
  const progress = document.querySelector('#audio-progress');
  const volume = document.querySelector('#audio-volume');
  const status = document.querySelector('#audio-status');
  const player = document.querySelector('.player');
  const title = player?.querySelector('span b');
  const playerPlayButton = player?.querySelector('[data-audio-play]');
  const storageKey = 'soundwave-player-state';
  const timeDisplay = document.createElement('span');
  timeDisplay.className = 'time-display';
  timeDisplay.setAttribute('aria-label', 'Thời gian đã phát và tổng thời lượng');
  timeDisplay.textContent = '0:00 / --:--';
  const cards = document.querySelectorAll('[data-track-index]');
  const tracks = [
    {
      title: 'Chẳng Ai Hiểu Về Tình Yêu',
      file: '1.mp3',
      author: 'Vương Anh Tú',
      authorImage: '1.jpeg',
      lyrics: `Hôm nay anh nhớ lại quãng thời gian của đôi ta
Bên nhau yêu nhau hôm nay chẳng ai ngỡ cách xa
Tình yêu là thế, nhiều khi thấy vui vẻ
Sự thật có vui đâu…

Khi vẫn còn yêu chẳng bận tâm những trái ngang
Tại sao biệt ly xa lạ đến ngỡ ngàng
Đành quên mọi thứ
Vậy sao lúc mới yêu lại vun đắp quá nhiều…

[Điệp khúc:]
Người ta nói chẳng ai hiểu về hai tiếng thương yêu
Chẳng phải cứ yêu nhau làm nhau khổ đau là tình yêu
Nhiều khi rất yêu nhau mà phải đứng ở rất xa
Nhìn em hạnh phúc bên ai chẳng phải mình
Vì mình có làm được đâu…

Nhường ai khác bên em là nhường đi hết tất cả
Yêu em chẳng khiến em được vui, thế nên anh phải xa
Càng yêu chỉ thêm thất vọng, càng tan nát cõi lòng
Không được như mong…`
    },
    {
      title: 'Gái Tây Gốc Việt Remix',
      file: '2.mp3',
      author: 'Phan Viết Tính',
      authorImage: '2.jpeg',
      lyrics: `Gái Tây gốc Việt gì không anh ơi
Sinh ra ở Louisiana, vẫn là con gái Việt

Mama nói: Baby girl phải kiêu thiệt

Lớn lên trong mansion view, cả city

Late night drive, playlist nghe SZA với Ty

Bạn bè nói em vibe hơi bad bad
Nhưng mà heart em vẫn còn soft soft (bae)

Anh bước tới nói câu: "Girl you so hot"
Em cười nhẹ thôi nhưng tim thì drop

Anh nhìn em lâu thêm chút
Ánh đèn bar hơi mờ
Ly rượu chắp môi thêm chút
Thấy anh nhưng em vẫn làm ngơ

Baby don't play me like that
Em biết mấy trò love trap (yeah hơ)

Girl Mỹ Con, môi em hơi đỏ
Anh nói yêu em hơi nhanh mà chưa rõ
Chạm môi một chút - oh my god
Heart em danger nhưng vẫn muốn thử

Girl Mỹ Con, bước đi high heels
Anh nhìn theo mà không dám feel
Nếu anh chỉ muốn chơi love game
Sorry baby, em không phải kiểu

Môi chạm môi - đừng nói dối
Em nhìn ra ngay boy.`
    },
    { title: 'Night Cruising', file: '3.mp3', author: 'Shinji Sato', authorImage: '3.jpeg' },
    {
      title: 'Thương Nhau Đến Thế Drill',
      file: '4.mp3',
      author: 'Gia Huy',
      authorImage: '4.jpeg',
      lyrics: `Yêu một người thật khó

Xóa một người thật đau

Khi đã đến với nhau

Lung linh như bức tranh tô màu

Quên một người càng khó

Nhớ người lại càng đau

Mưa cũng đổ rất lâu

Thiếu vắng em ngày nắng úa màu

Tương tư anh như nắm tro tàn

Bởi thân anh còn kiếp cơ hàn

Lo tương lai khốn khó

Nên em lại bi quan

Em như bông hoa sắc ngọc ngà

Quan tâm chi hạnh phúc đôi ta

Em xem là cuộc vui thôi mà`
    },
    {
      title: 'Trap Queen',
      file: '6.mp3',
      author: 'Fetty Wap & Tony Fadd',
      authorImage: '6.jpeg',
      lyrics: `I'm like "hey, what's up, hello"
Seen yo ƿretty ass soon as you came in that door
I just wanna chill, got a sack for us to roll
Marri℮d to the money, introduced her to my stove
Showed her how to whip it, now she remixin' for low
Ѕhe my trap queen, let her hit the bando
We be countin' up, watch how far them bands go
We just s℮t a goal, talkin' matchin' Lambos
Got 50, 60 grand, 500 grams though
Man, I swear I love her how sh℮ work the damn pole
Hit the strip club, we be letting bands go
Everybody hating, we just call th℮m fans though
In love with the money, I ain't never letting go

[Hook]
And I get high with mу baby
I just left the mall, I'm gettin' fly with my baby, yeaaahhh
And I can ride with my bɑby
I be in the kitchen cookin' pies with my baby, yeeaahhh
And I can ride with my baby
Ɩ just left the mall, I'm gettin' fly with my baby, yeaaahhh
And I can ride with my baby
I b℮ in the kitchen cookin' pies with my baby, yeeaahhh

[Verse]
I hit the strip with my trap qu℮en cause all we know is bands
I just might snatch up a 'Rari and buy my boo a Lamb'
I might just snɑtch her a necklace, drop a couple on a ring
She ain't wantin' for nothin' because I got her everуthing
It's big Zoo Wap from the bando, without dinero can't go
Remy boys got the stamp, though
Ϲount up hella, them bands though
How far can your bands go?
Fetty Wap I'm living fifty thousɑnd K how I stand though
If you checkin' for my pockets I'm like

[Hook x2] + [Bridge]

[Outro]
Ɩ be smoking dope and you know Backwoods what I roll
Remy Boy, Fetty eating shit up that's fasho
Ɩ'll run in ya house, then I'll fuck your ho
Cause Remy Boyz or nothin', Re-Re-Remy Boyz or nothin'`
    }
  ];

  if (!audio || !playButtons.length || !player) return;

  const picker = document.createElement('select');
  picker.className = 'track-picker';
  picker.setAttribute('aria-label', 'Chọn bài hát');
  tracks.forEach((track, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = track.title;
    picker.append(option);
  });
  player.insertBefore(picker, playerPlayButton);
  player.insertBefore(timeDisplay, progress.nextSibling);
  const volumeIcon = document.createElement('span');
  volumeIcon.className = 'volume-icon';
  volumeIcon.setAttribute('aria-hidden', 'true');
  volumeIcon.textContent = '🔊';
  player.insertBefore(volumeIcon, volume);

  const selectTrack = (index, shouldPlay = false) => {
    const track = tracks[index];
    if (!track) return;
    audio.src = track.file;
    audio.load();
    picker.value = String(index);
    if (title) title.textContent = track.title;
    document.querySelectorAll('[data-track-title]').forEach((element) => {
      element.textContent = track.title;
    });
    cards.forEach((card) => {
      card.classList.toggle('is-active', card.dataset.trackIndex === String(index));
    });
    document.querySelectorAll('[data-track-author]').forEach((element) => {
      element.textContent = track.author;
    });
    document.querySelectorAll('[data-track-author-image]').forEach((image) => {
      image.src = track.authorImage;
      image.alt = `Ảnh tác giả ${track.author}`;
    });
    document.querySelectorAll('[data-track-lyrics]').forEach((element) => {
      element.textContent = track.lyrics || 'Chưa có lời bài hát được cung cấp cho bản nhạc này.';
    });
    document.querySelectorAll('[data-track-cover]').forEach((cover) => {
      cover.style.backgroundImage = `linear-gradient(#0003,#0003), url("${track.authorImage}")`;
    });
    if (progress) progress.value = '0';
    if (status) status.textContent = '';
    setPlayingState(false);
    saveState();
    if (shouldPlay) togglePlayback();
  };

  const setPlayingState = (isPlaying) => {
    playButtons.forEach((button) => {
      button.textContent = isPlaying ? '⏸' : '▶';
      button.setAttribute('aria-label', isPlaying ? 'Tạm dừng' : 'Phát nhạc');
      button.setAttribute('aria-pressed', String(isPlaying));
    });
  };

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '--:--';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const updateTimeDisplay = () => {
    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  };

  const saveState = () => {
    localStorage.setItem(storageKey, JSON.stringify({
      track: Number(picker.value),
      time: audio.currentTime,
      playing: !audio.paused
    }));
  };

  const showError = () => {
    setPlayingState(false);
    if (status) status.textContent = 'Không thể tải bài hát. Vui lòng thử lại.';
  };

  const togglePlayback = async () => {
    if (audio.paused) {
      try {
        await audio.play();
        if (status) status.textContent = '';
      } catch {
        showError();
      }
    } else {
      audio.pause();
    }
  };

  picker.addEventListener('change', () => selectTrack(Number(picker.value)));
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const index = Number(card.dataset.trackIndex);
      selectTrack(index);
      window.location.href = `song-detail.html?track=${index}`;
    });
  });
  playButtons.forEach((button) => button.addEventListener('click', togglePlayback));
  audio.addEventListener('play', () => setPlayingState(true));
  audio.addEventListener('play', saveState);
  audio.addEventListener('pause', () => {
    setPlayingState(false);
    saveState();
  });
  audio.addEventListener('ended', () => {
    setPlayingState(false);
    if (progress) progress.value = '0';
    updateTimeDisplay();
    saveState();
  });
  audio.addEventListener('loadedmetadata', updateTimeDisplay);
  audio.addEventListener('error', showError);
  audio.addEventListener('timeupdate', () => {
    updateTimeDisplay();
    saveState();
    if (progress && Number.isFinite(audio.duration)) {
      progress.value = String((audio.currentTime / audio.duration) * 100);
    }
  });
  progress?.addEventListener('input', () => {
    if (Number.isFinite(audio.duration)) {
      audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    }
  });
  volume?.addEventListener('input', () => {
    audio.volume = Number(volume.value);
    if (volumeIcon) {
      volumeIcon.textContent = audio.volume === 0 ? '🔇' : audio.volume < 0.5 ? '🔉' : '🔊';
    }
  });

  const requestedTrack = Number(new URLSearchParams(window.location.search).get('track'));
  let savedState = null;
  try {
    savedState = JSON.parse(localStorage.getItem(storageKey) || 'null');
  } catch {
    savedState = null;
  }
  const initialTrack = Number.isInteger(requestedTrack) && requestedTrack >= 0
    ? requestedTrack
    : Number.isInteger(savedState?.track) ? savedState.track : 0;
  selectTrack(initialTrack);
  if (savedState?.track === initialTrack && Number.isFinite(savedState.time) && savedState.time > 0) {
    audio.addEventListener('loadedmetadata', () => {
      audio.currentTime = Math.min(savedState.time, audio.duration);
      updateTimeDisplay();
    }, { once: true });
  }
  if (savedState?.track === initialTrack && savedState.playing) {
    audio.addEventListener('canplay', () => {
      togglePlayback();
    }, { once: true });
  }
})();
