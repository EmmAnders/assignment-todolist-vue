<template>
  <div class="todo-wrapper">
    <div class="title">CREATE A TODO</div>
    <div class="fields">
      <div class="author">
        <img src="../assets/smile.svg" alt="" />
        <input type="text" placeholder="This todo belongs to" />
      </div>
      <div class="todo-text">
        <img src="../assets/pen.svg" alt="" />
        <input type="text" placeholder="Description" />
      </div>
    </div>
    <button class="add-button">ADD TODO</button>
  </div>
</template>

<script>
export default {
  name: "addtodo",
  components: {},
};
</script>

<style scoped>
.todo-wrapper {
  width: 600px;
  height: 550px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  margin: 0 auto;
  margin-top: 5%;
}

.title {
  text-align: center;
  font-size: 28px;
  padding-top: 24px;
  letter-spacing: 0.5px;
  color: #242f6b;
}

.fields {
  width: 100%;
  padding: 75px 5px 5px 5px;
}
.fields input, textarea {
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #242f6b;
  padding: 20px 10px 20px 5px;
  font-family: 'poppins';
}
.author,
.todo-text {
  margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
}

.fields img {
  height: 22px;
  margin: 0 10px -3px 25px;
}

::placeholder {
  color: #242f6b;
}

.add-button {
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  background: #526af2;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  transition: 0.5s;
}
.add-button:hover {
  background: #526af2ae;
}
.add-button:active {
  background: #526af2ae;
}
</style>
