<template>
  <div class="file-uploader">
    <span>Upload Profile Image</span>
    <input type="file" @change="convertToBase64" accept="image/*" style="cursor: pointer;" />
  </div>
</template>

<script>
import { uploadLogo } from '../api/user';

export default {
  data() {
    return {
      imageBase64: null
    };
  },
  methods: {
    convertToBase64(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imageBase64 = e.target.result;
          uploadLogo(e.target.result);
        };

        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };

        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
}
img {
  max-width: 100%;
  height: auto;
}
.file-uploader {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  align-items: start;
  flex-direction: column;
}
</style>
