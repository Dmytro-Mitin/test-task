
var vm = new Vue({
    el: '#constructor',
    data: {
      //default values
      activeMenuItem: 'btn1',
      activeClass: 'cb-item1',
      buttonNext: 'Далее',
      
      activePictureIndex: 0,
      activeBorderIndex: 0,
      activeMarkIndex: 0,  
      activeNextStep: '',
      selectImage: '',
      index: 0,
      
      next: false,
      titlePicture: '',
      signaturePicture: '',
      dateEvent: '', 
      activeBtn:'',
      flagPicture: false,
      flagBorder: false,

      step: 0,
      tmpstep: 1,
     
      tmpPriceStep1: 0,
      tmpPriceStep2: 0,
      tmpPriceStep4: 0,
      commonPrice: 0,

      //array for checked marks
      checkedMarks: [],
      // ajax response
      response: '',

//Arrays
      pictures: [
        {id: 1, src: 'img/pics/01.jpg',  alt:'Картинка №1', titlePict:'Картинка №1', price: 100 },
        {id: 2, src: 'img/pics/02.jpg',  alt:'Картинка №2', titlePict:'Картинка №2', price: 200 },
        {id: 3, src: 'img/pics/03.jpg',  alt:'Картинка №3', titlePict:'Картинка №3', price: 300 },
        {id: 4, src: 'img/pics/04.jpg',  alt:'Картинка №4', titlePict:'Картинка №4', price: 400 },
        {id: 5, src: 'img/pics/05.jpg',  alt:'Картинка №5', titlePict:'Картинка №5', price: 500 },
        {id: 6, src: 'img/pics/06.jpg',  alt:'Картинка №6', titlePict:'Картинка №6', price: 600 },
        {id: 7, src: 'img/pics/07.jpg',  alt:'Картинка №7', titlePict:'Картинка №7', price: 200 },
        {id: 8, src: 'img/pics/08.jpg',  alt:'Картинка №8', titlePict:'Картинка №8', price: 900 },
        {id: 9, src: 'img/pics/09.jpg',  alt:'Картинка №9', titlePict:'Картинка №9', price: 200 },
        {id: 10, src: 'img/pics/10.jpg',  alt:'Картинка №10', titlePict:'Картинка №10', price: 100 },
        {id: 11, src: 'img/pics/11.jpg',  alt:'Картинка №11', titlePict:'Картинка №11', price: 50 }
        ],
        classnames: [
          {classname: 'cb-item1'},
          {classname: 'cb-item2'},
          {classname: 'cb-item3'},
          {classname: 'cb-item4'},
        ],

        borders:[
          
          {src: 'img/borders/rama-01.png',  alt:'Багетная №1', title:'Багетная №1', price: 10 },        
          
          {src: 'img/borders/rama-02.png',  alt:'Багетная №2', title:'Багетная №2', price: 20 },          
          
          {src:'img/borders/rama-03.png', alt:'Багетная №3', title:'Багетная №3', price: 30,    
          hrefPre:'img/borders/prev.03.jpg', rel:'gal-2'},

          {src:'img/borders/rama-04.png', alt:'Багетная №4', title:'Багетная №4', price: 40, 
          hrefPre:'img/borders/prev.04.jpg', rel:'gal-3'},
          
          {src:'img/borders/rama-05.png', alt:'Багетная №5', title:'Багетная №5', price: 30,   
          hrefPre:'img/borders/prev.05.jpg', rel:'gal-4'},
        
          {src:'img/borders/rama-06.png', alt:'Багетная №6', title:'Багетная №6', price: 50, 
          hrefPre:'img/borders/prev.06.jpg', rel:'gal-5'},

          {src:'img/borders/rama-07.png', alt:'Багетная №7', title:'Багетная №7', price: 5, 
          hrefPre:'img/borders/prev.07.jpg', rel:'gal-6'},

          {src:'img/borders/rama-08.png', alt:'Багетная №8', title:'Багетная №8', price: 25, 
          hrefPre:'img/borders/prev.08.jpg', rel:'gal-7'},

          {src:'img/borders/rama-09.png', alt:'Багетная №9', title:'Багетная №9', price: 130, 
          hrefPre:'img/borders/prev.09.jpg', rel:'gal-8'},

          {src:'img/borders/rama-10.png', alt:'Багетная №10', title:'Багетная №10', price: 100, 
          hrefPre:'img/borders/prev.10.jpg', rel:'gal-9'},

          {src:'img/borders/rama-11.png', alt:'Багетная №11', title:'Багетная №11', price: 30, 
          hrefPre:'img/borders/prev.11.jpg', rel:'gal-10'},

          {src:'img/borders/rama-12.png', alt:'Багетная №12', title:'Багетная №12', price: 90, 
          hrefPre:'img/borders/prev.12.jpg', rel:'gal-11'},

          {src:'img/borders/rama-13.png', alt:'Багетная №13', title:'Багетная №13', price: 30, 
          hrefPre:'img/borders/prev.13.jpg', rel:'gal-12'},

          {src:'img/borders/rama-14.png', alt:'Багетная №14', title:'Багетная №14', price: 10, 
          hrefPre:'img/borders/prev.14.jpg', rel:'gal-13'},

          {src:'img/borders/rama-15.png', alt:'Багетная №15', title:'Багетная №15', price: 70, 
          hrefPre:'img/borders/prev.15.jpg', rel:'gal-14'},
        ],
checkedMarks: [],
marks:[
        {id:'mark0', title:'BahamaBlue', src:'img/marks/BahamaBlue.jpg', value: 'blue', price: 10},
        {id:'mark1', title:'BambooLeaves', src:'img/marks/BambooLeaves.jpg', value: 'green', price: 20},
        {id:'mark2', title:'LilacPosies', src:'img/marks/LilacPosies.jpg', value: '#dc42f4', price: 10},
        {id:'mark3', title:'PearTart', src:'img/marks/PearTart.jpg', value: 'yellow', price: 30},
        {id:'mark4', title:'RhubarbStalk', src:'img/marks/RhubarbStalk.jpg',value: '#bc3864', price: 5},
        {id:'mark5', title:'Tangelo', src:'img/marks/Tangelo.jpg', value: '#e58e51', price: 9},
        {id:'mark6', title:'CottageIvy', src:'img/marks/CottageIvy.jpg', value: '#1f703c', price: 7},
        {id:'mark7', title:'PearTart', src:'img/marks/PearTart.jpg', value: '#dad536', price: 11},
        {id:'mark8', title:'BahamaBlue', src:'img/marks/BahamaBlue.jpg', value: '#2250d1', price: 30},
        {id:'mark9', title:'PottersClay', src:'img/marks/PottersClay.jpg', value: '#cb7020', price: 9},
    ],    
    },
  
    methods: {
      setActivePicture: function(index) {
        this.activePictureIndex = index;
        this.flagPicture = true;
      
        this.tmpPriceStep1 = this.$data.pictures[index].price;
        this.next = true;
      },
      setActiveBorder: function(index) {
        this.activeBorderIndex = index;
        this.flagBorder = true;

        this.tmpPriceStep2 = this.$data.borders[index].price;
        this.next = true;
      },
      setActiveTitle: function(index) {
        this.next = true;
      },
      setActiveMark: function (index, event) {
        this.activeMarkIndex = index;

        // if checkbox checked: plus value, if unchecked: minus value
        if (event.target.checked == true) {
          this.tmpPriceStep4 += this.$data.marks[index].price;
        }
        else{
          this.tmpPriceStep4 -= this.$data.marks[index].price;
      }
      this.next = true;
      },

      nextStep: function (){
         //calculation of the total price step by step
         this.commonPrice = this.tmpPriceStep1 + this.tmpPriceStep2 + this.tmpPriceStep4;

        if(this.next==true & this.step<3){
          // if click button 'Next', +1 to the value of the 'step' variable
          this.step++;
          this.tmpstep++;
          this.activeMenuItem = "btn"+this.tmpstep;
          this.activeClass = this.$data.classnames[this.step].classname;
          this.next = false;
       } 
       if(this.step == 3) {
          this.sendData();
       }
      },
      sendData: function() {
        axios.post('http://jsonplaceholder.typicode.com/posts',{
            picture: this.$data.pictures[this.activePictureIndex].titlePict,
            border: this.$data.borders[this.activeBorderIndex].title,
            marks_color: this.checkedMarks,
            commonPrice: this.commonPrice,
            titlePicture: this.titlePicture,
            signaturePicture: this.signaturePicture,
            dateEvent: this.dateEvent,
            fontPicture: this.activeFont,
        }).then(response =>{
            console.log(response);
            this.response = response.statusText;
        })
    }
    },
    watch: {
      tmpPriceStep1: function(val){
        this.commonPrice = val;
    },
    tmpPriceStep2: function(val){
      this.commonPrice = val;
    },
    tmpPriceStep4: function(val){
      this.commonPrice = val;
    },
    next: function(val){
      if(val == true){
        this.activeNextStep = 'active';
      }
      else{
        this.activeNextStep = ''; 
      }
    },
    step: function(){
      if(this.step == 3){
        this.buttonNext = 'В корзину';
      }
    },
    },
    computed: {
      activePicture: function(){
         return this.pictures[this.activePictureIndex];
      },
      activeBorder: function(){
        if(this.step){
          return this.borders[this.activeBorderIndex];
        }
          return this.pictures[this.activePictureIndex];
      },
      activeFont: function () {
        if(this.activeBtn == 'ariston' || this.activeBtn == 'davinci' || this.activeBtn == 'brody'){
          return this.activeBtn;
        }
      },
      activeMark: function(){
        return this.marks[this.activeMarkIndex];
     },
    },
  }); 

