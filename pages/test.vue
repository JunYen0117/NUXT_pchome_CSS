<script setup>
let myNum = null
let myScroll = null
class DetectScroll {
  constructor(percent) {
    this.percent = percent
    this.isAcheive = false;
    this.scrollDistance = 0;
  }

  handleScroll() {
    console.log('Scroll event triggered');
    let scrollTop = window.scrollY;
    let docHeight = document.body.scrollHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    // 已捲動距離
    console.log(myScroll.call())
    this.scrollDistance = Math.round(scrollPercent * 100);

    // 是否達到捲動距離?
    if (this.scrollDistance >= this.percent) {
      this.isAcheive = true
    } else {
      this.isAcheive = false
    }
    // console.log(this.scrollDistance)
  }

  addScrollListener() {
    window.addEventListener('load', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
  }

  removeScrollListener() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
class Num {
  constructor(num) {
    this.num = num;
  }
  add () {
    this.num ++
  }
}
const myNum2 = reactive({})
const myScroll2 = reactive({})


onMounted(() => {
  myNum = new Num(0)
  myNum2.value = myNum
 
  myScroll = new DetectScroll(20)
  myScroll2.value = myScroll
  myScroll2.value.addScrollListener()

});

</script>

<template>
  <div>
    <div class="myResult1">
      {{ myNum2 }}
    </div>
    <div class="myResult2">
      {{ myScroll2 }}
    </div>
    <button @click="myNum2.value.add">btn</button>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque dolor magnam quis, delectus ducimus deserunt, sequi modi fugit distinctio autem nemo ex optio vitae perspiciatis fuga animi qui! Iure corrupti praesentium neque modi totam nihil quibusdam ratione minus quos repellendus a possimus odio ullam magnam fugit deserunt quia nobis beatae, temporibus veniam commodi nostrum consectetur? Aliquid, officia consequuntur tempore error doloremque aut repellendus similique, vel ut consequatur debitis. Aliquam quam veritatis, commodi eveniet animi error dolorum tempora necessitatibus officiis ex sit ad soluta ipsum suscipit repudiandae iusto, corrupti reprehenderit ipsa architecto quo pariatur debitis distinctio. Id ducimus fuga praesentium minima placeat numquam voluptate. Possimus quas error nisi sequi itaque excepturi, exercitationem sit atque fugiat dignissimos, suscipit omnis ex fuga molestias dolorum dolor optio? Recusandae illum deserunt quibusdam ducimus? Minima tenetur, a officia nisi deserunt quidem culpa eius, cumque veritatis necessitatibus placeat optio facilis. Velit quos iure nobis provident deserunt deleniti tenetur id, in, quam, incidunt iusto modi animi. Iure nobis earum illo sed at nisi officiis, vitae dolores qui officia temporibus, corporis blanditiis quam placeat itaque repudiandae iusto possimus labore ratione sint ullam accusantium? Minima doloribus laborum quaerat voluptates atque fugiat enim quam rem ipsum aspernatur maiores fugit, praesentium, assumenda sapiente alias, dolorum impedit officiis repellendus mollitia? Deleniti odio voluptate reiciendis reprehenderit quidem culpa iusto, omnis similique aliquam sint obcaecati dolor nostrum! Nesciunt doloribus harum repellat dolores vero amet omnis doloremque et maiores facere! Maxime aspernatur ullam doloribus non repudiandae ad nesciunt harum, ex laudantium? Et praesentium consectetur, hic, suscipit sit dolore, enim reprehenderit dolor ipsam ducimus dicta! Eaque, reprehenderit quisquam. Labore libero earum perferendis voluptates dolor dolorum fuga deleniti ullam nobis! Fugiat, similique non omnis ipsum cumque praesentium eius repudiandae esse molestiae vel aliquid sed iste accusamus. Excepturi odit modi inventore hic perspiciatis alias, exercitationem esse incidunt possimus eligendi quisquam eius quia magni dolores labore pariatur voluptate nisi consectetur, itaque sapiente! Sit maiores libero doloremque veritatis maxime molestias commodi necessitatibus. Voluptas consequuntur error quos eveniet tempore. Dignissimos, ex cupiditate temporibus, perferendis voluptatibus amet aliquam commodi repudiandae, adipisci aperiam sapiente voluptates facilis? Placeat id corporis, nesciunt, veritatis, commodi sunt tenetur nulla fuga doloribus sint voluptatibus. Quia laborum, nesciunt sapiente eius magnam assumenda ipsam consequuntur quae eum odio illo, corporis quod natus dolor enim nemo tempore optio deserunt explicabo vero, at aperiam. Aliquam deleniti ex quasi porro, quae, veritatis non ut ea distinctio reprehenderit quibusdam architecto quod delectus harum, cupiditate nobis excepturi adipisci eos eligendi illum repudiandae quo! Sed nobis aliquam nostrum? Veniam aliquam possimus, illo distinctio placeat nemo inventore repellendus non! Tenetur illo neque aspernatur odio vel numquam molestias dolores, explicabo consectetur sapiente libero sit quia magnam laboriosam officiis. Labore qui laborum cum pariatur non, recusandae, harum, quasi suscipit veniam aliquam dolore voluptates sunt cupiditate repellat. Error dolor similique omnis, eaque veritatis facere dolorum nulla nisi qui in repudiandae placeat sit asperiores, reiciendis ea velit! Vitae dolore voluptate dicta placeat eligendi facilis alias mollitia, sint cum aut tempora. Ut quo tempore ratione, esse dolor eveniet sit debitis fuga quas unde, velit vero autem laborum a dolore commodi? Autem natus alias ducimus, iste ipsum doloribus consequuntur placeat nulla ab aspernatur recusandae quo fugiat dolorum fuga repellendus deleniti assumenda, eos nam. Dolorem sapiente recusandae placeat cupiditate vel? Maiores beatae itaque quos cupiditate perferendis nobis dignissimos cum accusantium, adipisci quas nisi rem et recusandae repellat magni pariatur, laboriosam at soluta numquam. Aliquid ab, deserunt numquam necessitatibus sapiente expedita in accusamus unde nulla, optio nostrum? Maiores iste fugit odit voluptas quidem sunt exercitationem magnam atque, porro illo dolore quas dicta ut quisquam facilis eum quod laboriosam itaque repellendus ab totam optio perspiciatis autem suscipit! Vitae eius facere unde ex quae ipsa neque atque perferendis perspiciatis a asperiores, totam hic consequatur ad corporis est nobis, velit omnis, nam quam. Accusantium nulla explicabo perspiciatis quam dolores voluptates culpa officiis obcaecati aliquam et voluptatem natus unde possimus, libero impedit omnis blanditiis fugit, consequatur harum alias hic doloribus provident itaque? Omnis sed voluptate quam ipsa similique temporibus ratione tempore, nemo non beatae voluptatum et nostrum magnam, nulla qui unde harum! Voluptas, atque beatae libero ipsum sapiente voluptates ex tempora impedit? Obcaecati quasi quis aliquam, nobis neque dolor architecto, praesentium fuga sint rem impedit. Fugit accusamus inventore repellendus accusantium nam harum reiciendis, alias veritatis id porro earum doloribus cum. Pariatur eveniet blanditiis ducimus voluptate excepturi dolorum? Quibusdam, porro nam magni maiores reiciendis corporis cumque doloremque deserunt iure omnis provident veniam hic illum atque. Illum architecto officiis voluptates ratione odio itaque quod repudiandae corporis quae, reprehenderit inventore dolorem quas molestias quia eligendi fugit. Saepe tenetur praesentium commodi qui labore consequuntur delectus quidem nemo dolore, modi est cupiditate mollitia! Sequi, neque, soluta in ab quae at quas nam, id quo dignissimos possimus doloribus fugit modi recusandae repellat veniam! Exercitationem, odit quos. Soluta amet aliquid dolor maxime ab, sit tenetur quisquam labore voluptate deleniti deserunt vero facilis sequi earum adipisci velit a doloribus obcaecati officia asperiores culpa voluptatibus alias? Id, odit! Id eius fugiat fuga non dolores officiis placeat pariatur adipisci quis sed impedit odit reiciendis a cupiditate hic quae, asperiores dignissimos eum totam. Neque, autem accusantium unde provident saepe obcaecati distinctio repudiandae deleniti perferendis incidunt iste commodi, quae nostrum totam reiciendis adipisci aperiam, aliquam ab voluptates! Amet minus hic adipisci, eius inventore nostrum mollitia vitae beatae ipsam itaque error possimus iure eum, alias veritatis ipsum velit quo accusamus aut aspernatur nam necessitatibus ut aliquam. Reiciendis suscipit veritatis quae voluptatem nulla ab eligendi, vero praesentium debitis quibusdam inventore explicabo dolore? Consequuntur possimus obcaecati exercitationem veritatis sequi, harum molestiae nam temporibus doloremque itaque quisquam iste animi beatae ullam commodi deserunt suscipit in? Ex dolor laudantium optio aspernatur dolore. Harum excepturi odio debitis, odit officia quam culpa, eius aliquid dolorem suscipit repudiandae quibusdam perferendis adipisci nesciunt fugiat inventore fuga neque doloremque. Iste veritatis maxime, aut delectus, accusamus magnam rerum deleniti voluptates debitis dignissimos voluptatem inventore pariatur aspernatur vitae repellat animi, totam iure at. A, molestias. Pariatur temporibus amet incidunt atque rerum, fugiat natus maxime minima eveniet, accusantium similique? Error iure tempore modi officia accusamus sapiente expedita deserunt laborum excepturi necessitatibus voluptates, cupiditate quisquam perspiciatis, sint labore, nostrum repudiandae exercitationem. Maxime officiis, vel exercitationem facere blanditiis quidem laborum. Accusantium optio expedita perspiciatis id sit iste. Sit fuga sunt corrupti et delectus distinctio nemo earum quod aut omnis fugit qui culpa ducimus, error facere numquam consequatur voluptatum, recusandae quam vel quas minus sapiente? Ipsum, tempore tenetur odio adipisci, dolorum neque dolores odit officia modi perspiciatis id suscipit qui nam? Laudantium est dolores ratione maxime quo dicta sequi quae enim neque minus, modi dolorum animi tenetur. Quidem, possimus eius quas quis quod deleniti, qui deserunt repudiandae obcaecati ipsam quaerat, aut aliquid nemo alias facilis voluptatibus cupiditate delectus quam dicta! Nemo, sapiente. Rerum repellat sit rem ad sint eligendi earum ullam maxime! Expedita beatae reiciendis impedit quisquam dolorem, excepturi eos fugiat voluptate explicabo! Doloremque voluptatum, voluptas nulla repellendus corporis illo consectetur, impedit minus facilis at odio earum harum molestias iure quasi ipsam in! Quas adipisci harum, molestias quod rem odit. Quas pariatur beatae voluptate, quam cupiditate eius? Repudiandae facere error corrupti nesciunt tempore nemo blanditiis ex dolores recusandae, possimus repellat, qui eveniet? Totam cumque perferendis harum nostrum! Ab ad exercitationem, dolor totam soluta nesciunt consectetur asperiores itaque quaerat molestiae harum earum nam, necessitatibus repellendus. Adipisci quam ducimus, consequuntur ullam facere vero tempora blanditiis id ipsam nam velit quisquam alias dolores nisi aperiam nihil a itaque saepe odit magnam unde repellat. Maxime nemo facilis aliquam vero. Modi, recusandae laboriosam? Ipsum ipsam laborum et voluptas assumenda neque a, nisi eius explicabo odit numquam possimus nemo cum ratione! Explicabo unde repellat earum, debitis accusamus id deserunt cupiditate nam consectetur, fugit ipsam exercitationem corrupti minima tenetur optio enim similique magni totam voluptatum sequi, sit aperiam? Fugiat maiores illum incidunt neque alias repudiandae repellendus aliquam assumenda quaerat. Laudantium sit dolorum aperiam doloribus, nostrum earum, dolor soluta optio distinctio sunt deleniti enim quidem quas consequatur eum hic inventore. Libero, similique fugit dignissimos velit dolores illo ea rerum aspernatur! Porro assumenda soluta illum sapiente consequatur voluptas maiores sed tenetur voluptatibus? Ipsam unde fuga possimus labore eveniet tenetur, nihil, quisquam autem recusandae aliquid minima repellendus! Nulla recusandae dicta delectus sequi nesciunt eaque facilis aliquam neque odio vitae sint autem, magnam explicabo nihil mollitia vel adipisci. Minus eaque non quas reprehenderit quam at amet sit officiis modi, eveniet rem voluptatibus nihil odit accusantium molestias dicta veniam quibusdam repellendus consequatur odio optio dolor voluptatem? Corrupti, reprehenderit. Architecto similique ut omnis minima qui nemo, quod officiis eligendi nam, veniam natus. Doloremque, voluptates! Quo adipisci porro laborum earum similique natus accusantium consectetur deleniti, necessitatibus est officia culpa autem maxime repellat! Nam debitis optio eum consequatur. Temporibus labore eligendi corporis ducimus distinctio reprehenderit debitis vel consequuntur! Exercitationem placeat voluptas architecto tempora sequi pariatur perferendis quidem. Perspiciatis tempore sapiente culpa rem voluptates et ipsum inventore placeat natus fuga, harum magni consequatur omnis itaque. Sequi, quaerat saepe doloribus, nobis doloremque soluta quia necessitatibus aut sit et quam, debitis nisi. Nihil excepturi, incidunt, ipsam commodi beatae adipisci eum harum omnis soluta quas delectus laborum, autem aperiam? Voluptatibus quia commodi sequi omnis tenetur nisi voluptas temporibus asperiores dolorem enim voluptatem animi nesciunt laborum quaerat, minus maiores. Ipsum, pariatur! Fuga praesentium unde id blanditiis rerum deleniti repudiandae, magni quo voluptatem nostrum saepe veritatis debitis. Cupiditate ea harum fuga. Dolorem cumque et aut quisquam tempora deserunt, officia, similique minus magnam odio natus mollitia veritatis hic. Totam delectus inventore temporibus consequatur optio ipsum, minima tenetur corrupti laudantium quisquam, nobis, illo repellat. Nesciunt adipisci quam eos esse laborum tempora explicabo in alias accusantium expedita facilis, temporibus nobis, maiores fugiat ea cupiditate blanditiis animi delectus. Sapiente aliquid nisi quos labore quidem vero sed adipisci perferendis fugiat nemo culpa praesentium, quam laboriosam voluptates perspiciatis modi hic temporibus impedit nihil itaque voluptas cupiditate ut pariatur. Odit perspiciatis amet assumenda rem maxime est totam, beatae dicta, facilis dolor, maiores voluptatum. Atque tenetur nisi ab hic est dolorum! Mollitia omnis enim id, delectus incidunt earum. Voluptate repellat veniam eaque tempore et quidem reiciendis culpa, accusamus odit aliquid odio doloribus modi perferendis, rem asperiores dolor. Ab tempora enim minima quo architecto aliquid dolore, sed voluptates mollitia, odio totam sint atque ad itaque aut, eaque tempore aspernatur iure in illo temporibus. Tenetur sint doloremque tempore ex, quod excepturi, voluptates harum at aperiam minus ad culpa mollitia cupiditate fugiat aliquam amet quae dolor? Nobis alias recusandae odio quos officiis enim, odit fugiat explicabo dolorum, placeat quam. Eum, adipisci natus voluptates alias ab itaque incidunt nostrum maxime dolore libero saepe architecto accusantium. Corporis dolor eaque suscipit repellendus voluptate veniam illum mollitia ipsa? Porro ex vel ab, officia tempora nesciunt atque. In consectetur amet iste veritatis optio non qui rerum nihil velit, quasi id rem laboriosam libero facere eius aspernatur assumenda dolore ipsum deleniti enim. Esse dolore magnam assumenda veritatis omnis, doloremque illo quidem vel provident delectus corporis tenetur vero ullam asperiores. Ea alias aliquam quam? Distinctio molestias explicabo doloremque ut corporis sed, reiciendis officia hic eveniet itaque officiis id ab ullam porro eos provident accusantium molestiae asperiores sint, enim rerum voluptatum! Corporis dicta sed rem cum quo possimus non cupiditate similique exercitationem qui voluptatibus repudiandae odio optio incidunt, tempore facere quos? Numquam autem aliquam quasi vero distinctio? Explicabo labore perferendis quae ratione voluptates ea corporis nam nihil iusto dolorum, corrupti porro distinctio praesentium? Sequi ab incidunt doloribus voluptatum dicta deserunt laudantium vero laborum vitae pariatur fuga placeat unde culpa autem officiis, soluta possimus quaerat quibusdam. Obcaecati illum perferendis saepe! Consectetur architecto laborum culpa! Consequuntur fugiat quo rerum! Enim soluta atque maxime temporibus qui nemo labore sed eum minima odio eveniet, vel illum nam, odit impedit voluptatem laboriosam quod consectetur ullam similique nihil quidem inventore. Fugiat architecto cupiditate ipsa? Esse sapiente sequi aliquid mollitia quisquam eveniet illum eligendi laudantium quo sed doloribus ipsa explicabo dolor, delectus similique distinctio cumque voluptatibus quaerat nam non sint, quam neque. Natus fugit aliquam laudantium at voluptatum sapiente suscipit? Dolore eos molestias, accusamus repellat corrupti tenetur fuga necessitatibus id tempore nihil maxime commodi in quis voluptatem. Delectus ipsam officiis cupiditate consequatur, optio deleniti.
    </div>
  </div>
</template>

<style lang="scss">
.myResult1 {
  border: 2px dotted purple;
  position: fixed;
  right: 0px;
  background-color: lightblue;
}
.myResult2 {
  border: 2px dotted purple;
  position: fixed;
  background-color: lightblue;
}
button {
  display: block;
  margin: 0 auto;
}
</style>