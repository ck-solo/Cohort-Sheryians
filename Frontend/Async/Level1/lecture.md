//javascript main sabse pehle synchronous part run hota hai 
//js single threaded language hai 
js me sabse pahle synchronous part chalta hai , synchronous code js chalati hai main thread pr kyunki js single threaded hai, uska likha hua code chalna chaalu hai aur main thread pe humesha sabse pehle poora synchronous code chalega jab ye poora code finish hoga tab jaakr async code ke chalne ki baari aayegi
++++++++++++++++++++++++++++++++++++++

threads matalb  => processors me cores hote hai aur har core aur har core mai kai saare threads hote hai aur ek thread ek time par ek operation perform kr skta hai 
++++++++++++++++++++++++++++++++++++++


main thread => jaha pr sync code chalt hai sabse pehle
++++++++++++++++++++++++++++++++++++++

main stack => jo bhi main stack par aayega wo hi chalega
++++++++++++++++++++++++++++++++++++++

webAPI => browser ki taraf se kai saare features milte thai jo js main nhi hote, wo features hum js main use to krte hai pr wo js ke features nahi hote wo humein browser se milte hai 
like => console.log, settimeout , setinterval aise and for more just search window on console

++++++++++++++++++++++++++++++++++++++

callback queue => web api se complete hone pr code callback queue pr jata hai  

++++++++++++++++++++++++++++++++++++++

Microtask queue aur macrotask queue dono Event Loop ka part hote hain, lekin inki priority alag-alag hoti hai. Microtask queue me wo async tasks aate hain jo Promise se related hote hain, jaise then, catch, finally, ya queueMicrotask. Jab bhi JavaScript ka call stack empty hota hai, sabse pehle microtask queue poori ki poori empty hoti hai, uske baad hi koi aur kaam hota hai. Iska matlab microtasks ko sabse zyada priority milti hai.

++++++++++++++++++++++++++++++++++++++

Wahi macrotask queue me wo async tasks aate hain jo Web APIs / Browser APIs se aate hain, jaise setTimeout, setInterval, DOM events (click, scroll), etc. Event loop microtasks complete hone ke baad macrotask queue se sirf ek task uthata hai, phir dobara microtask queue check karta hai. Isi wajah se agar microtasks pending hain, to macrotasks wait karte rehte hain.

++++++++++++++++++++++++++++++++++++++
microtask queue high-priority hoti hai aur pehle execute hoti hai, jabki macrotask queue low-priority hoti hai aur microtasks ke baad execute hoti hai.