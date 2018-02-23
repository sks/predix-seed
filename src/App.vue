<template>
  <div id='app'>
    <div id='nav'>
      <px-app-nav 
        :selected-route.prop='[$route.path.split("/")[1]]'
        :items.prop='navItems'
        @selected-changed="navigate"
      ></px-app-nav>

    </div>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { INavItem } from '@/px/NavItem';
import { Routes } from '@/router/routes';

@Component
export default class HelloWorld extends Vue {
  public navItems: INavItem[] = [
    {label: 'Home', id: Routes.HOME, icon: 'px-fea:home'},
    {label: 'About', id: Routes.ABOUT, icon: 'px-com:chat'},
  ];

  public navigate(e: CustomEvent) {
    if (!e.detail.value) { return; }
    const navItem = e.detail.value.id;
    this.$router.push({name: navItem});
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
