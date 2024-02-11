<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
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
</template>

<style>
.navbar {
  margin: 20px;
}
</style>
