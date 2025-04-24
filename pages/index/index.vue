<!-- pages/index/index.vue -->
<template>
  <view class="container">
    <scroll-view scroll-y class="scroll-content" :show-scrollbar="false">
      <!-- 字母部分 -->
      <view class="section-title">字母表 (A-Z)</view>
      <view class="row" v-for="(row, index) in chunkArray(letters, 2)" :key="'letter'+index">
        <view 
          class="card" 
          v-for="item in row" 
          :key="item.letter"
          @tap="playSound(item.audio)"
        >
          <text class="char">{{ item.letter }}</text>
          <text class="phonetic">{{ item.word }}</text>
        </view>
      </view>

      <!-- 数字部分 -->
      <view class="section-title">数字 (0-9)</view>
      <view class="row" v-for="(row, index) in chunkArray(numbers, 2)" :key="'number'+index">
        <view 
          class="card" 
          v-for="item in row" 
          :key="item.letter"
          @tap="playSound(item.audio)"
        >
          <text class="char">{{ item.letter }}</text>
          <text class="phonetic">{{ item.word }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      letters: [
        { letter: 'A', word: 'Alpha', audio: '/static/audio/Alpha.mp3' },
        { letter: 'B', word: 'Bravo', audio: '/static/audio/Bravo.mp3' },
        { letter: 'C', word: 'Charlie', audio: '/static/audio/Charlie.mp3' },
        { letter: 'D', word: 'Delta', audio: '/static/audio/Delta.mp3' },
        { letter: 'E', word: 'Echo', audio: '/static/audio/Echo.mp3' },
        { letter: 'F', word: 'Foxtrot', audio: '/static/audio/Foxtrot.mp3' },
        { letter: 'G', word: 'Golf', audio: '/static/audio/Golf.mp3' },
        { letter: 'H', word: 'Hotel', audio: '/static/audio/Hotel.mp3' },
        { letter: 'I', word: 'India', audio: '/static/audio/India.mp3' },
        { letter: 'J', word: 'Juliett', audio: '/static/audio/Juliett.mp3' },
        { letter: 'K', word: 'Kilo', audio: '/static/audio/Kilo.mp3' },
        { letter: 'L', word: 'Lima', audio: '/static/audio/Lima.mp3' },
        { letter: 'M', word: 'Mike', audio: '/static/audio/Mike.mp3' },
        { letter: 'N', word: 'November', audio: '/static/audio/November.mp3' },
        { letter: 'O', word: 'Oscar', audio: '/static/audio/Oscar.mp3' },
        { letter: 'P', word: 'Papa', audio: '/static/audio/Papa.mp3' },
        { letter: 'Q', word: 'Quebec', audio: '/static/audio/Quebec.mp3' },
        { letter: 'R', word: 'Romeo', audio: '/static/audio/Romeo.mp3' },
        { letter: 'S', word: 'Sierra', audio: '/static/audio/Sierra.mp3' },
        { letter: 'T', word: 'Tango', audio: '/static/audio/Tango.mp3' },
        { letter: 'U', word: 'Uniform', audio: '/static/audio/Uniform.mp3' },
        { letter: 'V', word: 'Victor', audio: '/static/audio/Victor.mp3' },
        { letter: 'W', word: 'Whiskey', audio: '/static/audio/Whiskey.mp3' },
        { letter: 'X', word: 'X-ray', audio: '/static/audio/X-ray.mp3' },
        { letter: 'Y', word: 'Yankee', audio: '/static/audio/Yankee.mp3' },
        { letter: 'Z', word: 'Zulu', audio: '/static/audio/Zulu.mp3' }
      ],
      numbers: [
        { letter: '0', word: 'Zero', audio: '/static/audio/Zero.mp3' },
        { letter: '1', word: 'One', audio: '/static/audio/One.mp3' },
        { letter: '2', word: 'Two', audio: '/static/audio/Two.mp3' },
        { letter: '3', word: 'Three', audio: '/static/audio/Three.mp3' },
        { letter: '4', word: 'Four', audio: '/static/audio/Four.mp3' },
        { letter: '5', word: 'Fife', audio: '/static/audio/Fife.mp3' },
        { letter: '6', word: 'Six', audio: '/static/audio/Six.mp3' },
        { letter: '7', word: 'Seven', audio: '/static/audio/Seven.mp3' },
        { letter: '8', word: 'Eight', audio: '/static/audio/Eight.mp3' },
        { letter: '9', word: 'Niner', audio: '/static/audio/Niner.mp3' }
      ]
    }
  },
  methods: {
    // 将数组分割为二维数组
    chunkArray(arr, size) {
      return arr.reduce((acc, val, i) => {
        if (i % size === 0) acc.push([])
        acc[acc.length - 1].push(val)
        return acc
      }, [])
    },

    // 播放音频
    playSound(audioPath) {
      const audio = uni.createInnerAudioContext()
      audio.src = audioPath
      audio.play()
      audio.onEnded(() => audio.destroy()) // 播放结束后销毁实例
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20rpx;
  background: #f8f9fa;
}

.scroll-content {
  height: calc(100vh - 40rpx);
}

.section-title {
  font-size: 32rpx;
  color: #2c3e50;
  padding: 30rpx 20rpx 10rpx;
  font-weight: bold;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
  padding: 0 20rpx;
}

.card {
  width: 345rpx;
  height: 200rpx;
  background: #ffffff;
  border-radius: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  transition: all 0.2s;

  &:active {
    background: #f1f3f5;
    transform: scale(0.98);
  }
}

.char {
  font-size: 56rpx;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 10rpx;
}

.phonetic {
  font-size: 28rpx;
  color: #ff0000;
  text-transform: uppercase;
  letter-spacing: 1rpx;
}
</style>