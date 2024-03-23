<template>
  <div class="mental-health">
    <h1>Mental Health</h1>
    <v-container class="mental-dialog">
      <v-btn color="primary" dark @click="dialog = true" class="dialog-btn">Add a Blog</v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Add a Blog</v-card-title>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;">
            <div style="display: flex; gap: 20px; justify-content: center; align-items: center;">
              <span class="dialog-heading">Heading: </span>
              <input class="dialog-input" v-model="blog.title" />
            </div>
            <textarea class="dialog-textarea" v-model="blog.content" cols="30" rows="10" placeholder="Please enter your message here"></textarea>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <btn text @click="dialog = false" class="dialog-disagree">Cancel</btn>
            <btn text @click="onSubmit" class="dialog-agree">Submit</btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
  <h1 class="blog-heading">Find some useful resources for your mental health</h1>
  <v-container>
  <v-list>
    <v-list-item v-for="(blog, index) in blogs" :key="index" style="border-top: 1px solid grey; margin-bottom: 20px;">
      <v-list-item-content>
        <v-list-item-title v-text="blog.title"></v-list-item-title>
        <v-list-item-subtitle class="text--primary">
          {{ getTwoLineGist(blog.content) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        blogs: [],
        blog: {},
      };
    },
    methods: {
      getTwoLineGist(content) {
        return content.length > 100 ? content.substring(0, 100) + '...' : content;
      },
      onSubmit() {
        this.blogs.push(this.blog);
        this.blog = {};
        this.dialog = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mental-health {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .mental-dialog {
    max-width: fit-content !important;
    margin-right: 0;
    margin-left: 0;
  }
  .dialog-btn {
    background: linear-gradient(to right, #8560DB, #3A3873);
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
  .dialog-btn:hover {
    transform: scale(1.1);
  }
  .dialog-agree {
    background: linear-gradient(to right, #8560DB, #3A3873) !important;
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .dialog-agree:hover {
    background: linear-gradient(to right, #8560DB, #3A3873) !important;
    transform: scale(1.05);
  }
  .dialog-disagree {
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 4px;
    color: black;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .dialog-disagree:hover {
    background-color: transparent;
    transform: scale(1.05);
  }
  .dialog {
    &-heading{
      font-weight: bolder;
      font-size: 20px
    }
    &-input {
      height: 30px;
      padding: 10px;
      font-size: 16px;
      outline: none;
    }
    &-textarea {
      width: 400px;
      font-size: 16px;
      padding: 16px;
      outline: none;
    }
  }
  .blog-heading {
    margin-left: 20px;
  }
</style>