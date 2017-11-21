var vue = new Vue ({
  el: '#app',
  data: {
    itemList: [],
    cart: [],
    total: 0
  },
  methods: {
    getAllItem(){
      let data = {
        "item": [
          {
            "_id": 1,
            "itemName": "Dragon Crew",
            "image": "assets/img/crew-dragon.jpg",
            "specification": [
              {"passanger": 2},
              {"engine": "Nuclear reactor injector"}
            ],
            "category": "rocket",
            "priceidr": 1500000000
          },
          {
            "_id": 2,
            "itemName": "Silver Hawk",
            "image": "assets/img/silver_1.jpeg",
            "specification": [
              {"passanger": "-"},
              {"engine": "Solar Reactor"}
            ],
            "category": "sattelites",
            "priceidr": 100000000
          },
          {
            "_id": 3,
            "itemName": "Hydra Capsule",
            "image": "assets/img/SpaceX-capsule.jpg",
            "specification": [
              {"passanger": 1500000},
              {"engine": "Solar, Nuclear, Hybrid"}
            ],
            "category": "rocket",
            "priceidr": 10000000000
          },
          {
            "_id": 4,
            "itemName": "One Way Mars Ticket",
            "image": "assets/img/one-way.jpg",
            "specification": [
              {"passanger": 5},
              {"engine": "Venus Gas"}
            ],
            "category": "one_way_ticket",
            "priceidr": 10000000
          },
          {
            "_id": 5,
            "itemName": "Moon Catcher",
            "image": "assets/img/mars-colonial-b.png",
            "specification": [
              {"passanger": 5},
              {"engine": "Earth Gas"}
            ],
            "category": "rocket",
            "priceidr": 100000000
          },
          {
            "_id": 6,
            "itemName": "Space Suit",
            "image": "assets/img/suit.jpg",
            "specification": [
              {"solar_guard": true},
              {"o2_capacity": 10}
            ],
            "category": "space_suit",
            "priceidr": 100000
          }
        ]
      }
      this.itemList = data.item;
      // switch here if u want use json-server
      //
      // axios.get('http://localhost:3000/item')
      // .then(response=>{
      //   this.itemList = response.data
      // }).catch(err=>{
      //   console.error();
      // })
    },
    addtocart(id){
      var pos = this.checkId(id._id)
      if(pos>=0){
        this.cart[pos].qty += 1
        this.total += this.cart[pos].priceidr
        this.cart[pos].totalitem += this.cart[pos].priceidr
      } else {
        let item = this.itemList.find(element=>{
            return element._id == id._id
        })
        this.cart.push({
          itemid: item._id,
          name: item.itemName,
          priceidr: item.priceidr,
          qty: 1,
          totalitem: item.priceidr
        })
        this.total += item.priceidr;
      }
    },
    checkId(num){
      return this.cart.findIndex(element=>{
        return element.itemid == num
      });
    },
    delId(deleteid){
      let pos = this.cart.findIndex(element=>{
        return deleteid.itemid == element.itemid
      });
      // console.log(pos);
      this.total -= this.cart[pos].totalitem
      this.cart.splice(pos,1)
      $("#cart").modal("show");
    },
    checkout(){
      this.cart = []
      this.total = 0
      alert('Your order has been received')
      location.reload(); 
    }
  },
  created() {
    this.getAllItem();
  }
})