<template>
  <div class="container">
    <div class="row">
      <div class="jumbotron">
        <h1>OAC Language Tool</h1>
        <p>
          A simple tool to generate translation texts for the OAC project, since doing it manually is a pain in the butt.
        </p>
      </div>
    </div>
    <div class="row input-row">
      <div class="col-sm-4 form-group">
        <label>English String</label>
        <input type="text" class="form-control" placeholder="English translation" v-model="english">
      </div>
      <div class="col-sm-4 form-group">
        <label>Spanish String</label>
        <input type="text" class="form-control" placeholder="Spanish translation" v-model="spanish">
      </div>
      <div class="col-sm-4 form-group">
        <label>French String</label>
        <input type="text" class="form-control" placeholder="French translation" v-model="french">
      </div>
      <div class="col-sm-6 form-group">
        <label>Key</label>
        <input type="text" class="form-control" placeholder="_key_" v-model="key">
      </div>
      <div class="col-sm-6 form-group">
        <label>Description</label>
        <input type="text" class="form-control" placeholder="A description of the string" v-model="description">
      </div>
    </div>
    <div class="row translation-row">
      <div class="col-sm-4 form-group">
        <label>English/Default Object</label><br/>
        <pre>{{createString(english)}}</pre>
      </div>
      <div class="col-sm-4 form-group">
        <label>Spanish Object</label><br/>
        <pre>{{createString(spanish)}}</pre>
      </div>
      <div class="col-sm-4 form-group">
        <label>French Object</label><br/>
        <pre>{{createString(french)}}</pre>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'translator',
    data() {
      return {
        english: 'Hello',
        spanish: 'Hola',
        french: 'Bonjour',
        key: '_hello_',
        description: 'Say Hello',
      };
    },
    methods: {
      createString: function createEnglishString(a) {
        return `{\n"key": "${this.key}",\n "value": "${a}",\n "description": "${this.description}"\n}`;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
