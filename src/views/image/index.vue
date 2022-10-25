<template>
  <div  ref="box">
 <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple
  :before-upload="handleBefore"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<!-- <input type="file" id="file"  accept="image/*">  -->
  <img  ref="img" :src="url" alt="">
  <!-- <img :src="src" alt=""> -->
  <div class="img-box" style="display: flex">
    <img v-for="item in srcList" :key="item" :src="item" alt="">
    
  </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas'
  export default {
    data() {
      return {
        // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList:[],
        url:'',
        src:'',
        srcList:[],
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleBefore(file) {
        let url = URL.createObjectURL( file)
        this.url = url
        let img = new Image()
        img.src = url
        img.onload= () => {
            // let canvas = document.createElement('canvas')
            // canvas.width = img.width
            // canvas.height = img.height/4
            // let context = canvas.getContext('2d')
            //  console.log('w--', img.width, 'h--', img.height,img.height/4)
            // // context.drawImage(img, 0,0,img.width,img.height)
            // context.drawImage(img, 0,img.height/4,img.width,img.height/4,0,0,img.width,img.height/4)
            // this.src = canvas.toDataURL(`image/png`,1)
            // // console.log(canvas.toDataURL(`image/png`))
            let imgWidth=img.width
            // 将图片分为四份,下面是防止有小数
            let imgHeightOne = Math.floor(img.height/4)
            let imgHeightTwo = img.height - imgHeightOne*3
            console.log('imgHeightOne',imgHeightOne, 'imgHeightTwo', imgHeightTwo)
            for(let i = 0 ; i < 4; i++){
              let canvas = document.createElement('canvas')
              let context = canvas.getContext('2d')
              canvas.width = img.width
              if(i!==3) {
                canvas.height = imgHeightOne
                context.drawImage(img, 0,i*imgHeightOne,img.width,imgHeightOne,0,0,img.width,imgHeightOne)
              }else {
                canvas.height = imgHeightTwo
                context.drawImage(img, 0,i*imgHeightOne,img.width,imgHeightTwo,0,0,img.width,imgHeightTwo)
              }
              this.srcList.push(canvas.toDataURL(`image/png`))
            }
        }
        return false
      },

    }
  }
</script>
<style scoped>

</style>