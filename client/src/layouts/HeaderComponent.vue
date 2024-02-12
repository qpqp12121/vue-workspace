<template>
  <div class="container">

  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16" style="margin-bottom: 6px;">
          <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
          <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
        </svg>
        게시판
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/boardList">전체조회</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/boardForm">글 등록</router-link>
        </li>
      </ul>
    </div>
  </nav>

</div>
</template>

<style>
.navbar {
  margin-top: 20px;
}
</style>
