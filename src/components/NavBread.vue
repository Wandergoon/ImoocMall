<template>
  <div class="nav-breadcrumb-wrap">
        <div class="container">
          <nav class="nav-breadcrumb">
            <a href="/">Home</a>
            <!-- 写一个默认的插槽,来放公共的 -->
            <slot></slot>
          </nav>
        </div>
      </div>
</template>
<style>
.nav-breadcrumb-wrap {
    text-align: left
}
</style>


