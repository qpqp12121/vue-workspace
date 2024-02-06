<template>
  <nav class="nav">
  <router-link class="nav-link active" aria-current="page" to="/">전체조회</router-link>
  <router-link class="nav-link" to="/userInsert">등록</router-link>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a> 
  <!--router-link는 반드시 to속성있어야 됨 (disabled에 to속성없으면 그대로 a태그 쓰면 됨)-->
</nav>
</template>
