<!DOCTYPE html>
<html>

<head>
  <title>Vue.js Posts</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
  <div id="app">
    <div id="topics">
      <post-component v-for="post in posts" :key="post.title" :post="post"></post-component>
    </div>
  </div>

  <script>
    Vue.component('post-component', {
      props: ['post'],
      template: `
        <div class="topic">
          <img :src="post.src" alt="Image 1" width="500">
          <div class="content">
            <h3 class="title">{{ post.title }}</h3>
            <h3 class="date">{{ post.date }}</h3>
          </div>
          <p>{{ post.brief }}</p>
          <ul class="tags">
            <li v-for="tag in post.tags">
              <p>{{ tag }}</p>
            </li>
          </ul>
        </div>
      `
    });

    new Vue({
      el: '#app',
      data: {
        posts: [
          {
            src: "Assets/Stack.png",
            title: "Stack",
            brief: "This data structure uses Last in First out (LIFO), which can be useful for many applications for instance: paralimeter matching and runtime code excution. Stacks can be impliment in many ways for example, it can be impliment as an array but that come in a cost of space.",
            tags: ["Data structures", "Algorithms"],
            date: "10/10/2023"
          },
          {
            src: "Assets/Queue.png",
            title: "Queue",
            brief: "This data strucutre uses First in First out (FIFO), which can be useful for many applications for instance: data processing, networking and os. Queues can be impliment many ways for example, Circuler arrays and linked list.",
            tags: ["Data structures", "Algorithms"],
            date: "10/10/2023"
          },
          {
            src: "Assets/Recursion.png",
            title: "Recursion",
            brief: "Recursion is a technique where a function calls itself to solve a problem by breaking it down into simpler instances.",
            tags: ["Recursion", "Algorithms"],
            date: "10/10/2023"
          }
        ]
      }
    });
  </script>
</body>

</html>