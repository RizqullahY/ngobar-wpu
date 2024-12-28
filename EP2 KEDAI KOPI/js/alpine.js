document.addEventListener("alpine:init", () => {
   Alpine.data("products", () => ({
      items: [
         { id: 1, name: "Kopi Arabika", img: "1.kopi-arabika.jpg", price: 10000 },
         { id: 2, name: "Kopi Robusta", img: "2.kopi-robusta.jpg", price: 20000 },
         { id: 3, name: "Kopi Liberika", img: "3.kopi-liberika.jpeg", price: 30000 },
         { id: 4, name: "Kopi Joss", img: "4.kopi-joss.jpg", price: 40000 },
         { id: 5, name: "Kopi Mandailing", img: "5.kopi-mandailing.jpg", price: 50000 },
      ],
   }));

   Alpine.store('cart' , {
      items:[],
      total:0,
      quantity:0,
      add(newItem){
         console.log(newItem)
      }
   })
});

// konversi ke rupiah
const rupiah = (number) =>{
   return new Intl.NumberFormat('id-ID' , {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0 , // biar tidak ada koma
   }).format(number);
} 