import bus from '../utiles/bus.js';

// mixin
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => console.log(error));
    }, 3000);
  }
}


// // hoc
// export default function create() {
//   //재사용할 컴포넌트 옵션
// }