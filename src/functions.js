const countNumber = (num, setNum) => {
   setTimeout(() => {
      if (num < 10) {
         setNum(num+1);
      }else {
         setNum(0);
      }
   }, 300);
}

export default countNumber;