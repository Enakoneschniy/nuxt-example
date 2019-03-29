<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        v-validate="'required'"
        name="title"
        v-model="title"
        type="text"
        class="form-control"
        :class="{'has-error': errors.has('title') }"
        id="title"
        placeholder="Title">
      <small class="form-text text-muted error-text">
        {{ errors.first('title') }}
      </small>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="description"
        v-validate="'required'"
        id="description"
        class="form-control"
        rows="10"
        name="description"
        :class="{'has-error': errors.has('description') }"
        placeholder="Description"></textarea>
      <small class="form-text text-muted error-text">
        {{ errors.first('description') }}
      </small>
    </div>
    <button type="submit" class="btn btn-primary btn-block" v-if="!isEditMode">Create</button>
    <button type="submit" class="btn btn-primary btn-block" v-else>Save</button>
  </form>
</template>

<script>
  export default {
    name: "NoteForm",
    props: {
      note: {
        type: Object,
        required: false
      }
    },
    computed: {
      isEditMode() {
        return !!this.note;
      }
    },
    data() {
      return {
        title: '',
        description: ''
      }
    },
    created() {
      console.log(this.note);
      if(this.isEditMode) {
        this.title = this.note.title;
        this.description = this.note.description;
      }
    },
    methods: {
      onSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            if(!this.isEditMode) {
              this.$emit('create', {
                title: this.title,
                description: this.description
              })
            } else {
              this.$emit('update', {
                title: this.title,
                description: this.description
              })
            }
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  input, textarea {
    outline: none!important;
  }
  input:focus, textarea:focus {
    outline: none!important;
    border-color: #ced4da;
    box-shadow: none!important;
  }
  .has-error {
    border-color: red !important;
  }
  .error-text {
    color: red !important;
  }
</style>
