<template>
  <div class="home">
    <div class="z-slide-wrap top" id='slider'>
      <ul class="z-slide-content">
        <li class="z-slide-item" v-for="(slide, i) in slides" :key="i" >  
          <a :href="image.src" v-for="(image, imgIndex) in slide" :key="imgIndex" @mousedown="setInitialCoords" @mouseup="ifDragged" @click="$event.preventDefault()">
            <img :src="image.src" alt="" :style="'width: ' + imageWidth">
          </a> 
        </li>
      </ul>
  </div>
    <v-layout justify-center>
      <v-flex class="text-xs-center" lg9>
        <h2 class="home__heading">
          Классический текст Lorem Ipsum, используемый с XVI века
        </h2>
        <p class="home__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 class="home__heading">
          Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
        </h2>
        <p class="home__text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <h2 class="home__heading">
          Английский перевод 1914 года, H. Rackham
        </h2>
        <p class="home__text">
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, 
          so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty 
          through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. 
          In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed 
          and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures 
          have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to 
          secure other greater pleasures, or else he endures pains to avoid worse pains.
        </p>
      </v-flex>
    </v-layout>   
  </div>
</template>

<script>
import Slider from '../plugins/zSlider';

export default {
  name: 'home',
  components: {
  },
  data: function() {
    return {
      images: [
        {
          src: 'https://placeimg.com/420/315/any'
        },
        {
          src: 'https://placeimg.com/420/315/arch/sepia'
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
      ],
      initialLeftPos: 0
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
  },
  mounted() {
    this.slider = new Slider('#slider', '.z-slide-item');
  },
  methods: {
    setInitialCoords(e) {
      this.initialLeftPos = e.pageX - e.target.offsetWidth / 2;
    },
    ifDragged (e) {
      if (e.pageX - e.target.offsetWidth / 2 === this.initialLeftPos) {
        window.location = e.currentTarget.href;
      } else {
        e.preventDefault();
      }
    }
  }
}
</script>
<style>
@import url(../plugins/zSlider.css);
.z-slide-content {
  height: 270px;
}
@media screen and (min-width: 600px)  {
  .z-slide-content {
    height: 340px;
  }
}
@media screen and (min-width: 1904px)  {
  .z-slide-content {
    height: 490px;
  }
}
.home .v-btn:before {
    background-color: #ecf2f9;
}
</style>
