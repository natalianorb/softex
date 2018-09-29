<template>
  <div class="home">
    <v-carousel hide-delimiters>
      <v-carousel-item cycle="false"
        v-for="(slide, i) in slides"
        :key="i"
      >
        <img  v-for="(image, imgIndex) in slide"
          :key="imgIndex"
          :src="image.src" alt="" :style="'width: ' + imageWidth">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data: function() {
    return {
      images: [
        {
          src: 'https://placeimg.com/420/315/any'
        },
        {
          src: 'https://loremflickr.com/420/315'
        },
        {
          src: 'https://placeimg.com/420/315/nature'
        },
        {
          src: 'https://placeimg.com/420/315/arch'
        },
        {
          src: 'https://placeimg.com/420/315/tech'
        },
        {
          src: 'https://placeimg.com/420/315/people'
        },
       
        {
          src: 'https://www.fillmurray.com/420/315'
        }        
      ]
    };
  },
  computed: {
    imageWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': 
        case 'md': 
        case 'lg': return '400px'
        case 'xl': return '600px'
      }
    },
    slides () {
      const groupByAmount = (images, amount) => {
        let res = [];
        let index = 0;
        let slide = [];

        while (index < images.length) {
          slide.push(images[index]);     
          if (slide.length === amount || index === images.length - 1) { 
            res.push(slide);             
            slide = [];                  
          }
          index++;                      
        }

        return res;
      }

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm': return groupByAmount(this.images, 1);
        case 'md': return groupByAmount(this.images, 2);
        case 'lg':
        case 'xl': return groupByAmount(this.images, 3);
      }
    }
  }
}
</script>
<style>
.v-carousel {
  height: 270px;
}
.v-responsive__content {
  padding: 20px 0 0;
}
@media screen and (min-width: 600px)  {
  .v-carousel {
    height: 340px;
  }
}
@media screen and (min-width: 1904px)  {
  .v-carousel {
    height: 490px;
  }
}
</style>
